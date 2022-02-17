import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameService, Game, APIResponse } from 'src/app/core';

const SORT_TYPES: { [label: string]: string } = {
  'Name': 'name',
  'Released': '-released',
  'Added': '-added',
  'Created': '-created',
  'Updated': '-updated',
  'Rating': '-rating',
  'Metacritic': 'metacritic'
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly selectSortItems = Object.keys(SORT_TYPES);
  
  public sort: string = '';
  private search: string = '';

  public games: Array<Game> = [];

  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(
    private gameService: GameService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['search']) {
        this.search = params['search'];
        this.searchGames('metacrit', this.search);
      } else {
        this.search = '';
        this.searchGames('metacrit');
      }
    })
  }

  ngOnDestroy(): void {
    this.gameSub && this.gameSub.unsubscribe();
    this.routeSub && this.routeSub.unsubscribe();
  }

  onSortingChange(sort: string): void {
    this.searchGames(SORT_TYPES[sort], this.search);
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.gameService
        .getGameList(sort, search)
        .subscribe((gameList: APIResponse<Game>) => {
          this.games = gameList.results as Game[];
          console.log(gameList);
        })
  }

  openGameDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse } from 'src/app/models/apiResponse';
import { Game } from 'src/app/models/game';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = '';
  private search: string = '';

  public games: Array<Game> = [];

  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.search = params['game-search'];
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
    this.searchGames(sort, this.search);
  }

  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
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

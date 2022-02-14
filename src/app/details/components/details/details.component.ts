import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { GameService, Game } from 'src/app/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  public gameRating: number = 0;
  public gameId: string = '';
  public game: Game;
  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.gameId = params['id'];
        this.getGameDetails(this.gameId);
      }
    )
  }

  ngOnDestroy(): void {
    this.gameSub && this.gameSub.unsubscribe();
    this.routeSub && this.routeSub.unsubscribe();
  }

  getGameDetails(id: string): void {
    this.gameSub = this.gameService
    .getGameDetails(id)
    .subscribe((res: Game) => {
      this.game = res;

      console.log(this.game);
      setTimeout(() => {
        this.gameRating = this.game.metacritic;
      }, 1000);
    })
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    }
    if (value > 50) {
      return '#fffa50';
    }
    if (value > 30) {
      return '#f7aa38';
    }
    return '#ef4655';
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse } from 'src/app/models/apiResponse';
import { Game } from 'src/app/models/game';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public gameRating: number = 0;
  public gameId: string = '';
  public game: Game;
  private routeSub: Subscription;
  private gameSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.gameId = params['id'];
        this.getGameDetails(this.gameId);
      }
    )
  }

  getGameDetails(id: string): void {
    this.gameSub = this.httpService
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

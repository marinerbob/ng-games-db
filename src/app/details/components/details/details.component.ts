import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Game, GameId } from 'src/app/core';

import { Subscription } from 'rxjs';
import { DetailsService } from '../../services/details.service';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
    public gameId: GameId;
    public game: Game;

    private routeSub: Subscription;
    private gameSub: Subscription;

    constructor(private activatedRoute: ActivatedRoute, private detailsService: DetailsService) {}

    ngOnInit(): void {
        this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
            this.gameId = params['id'];
            this.getGameDetails(this.gameId);
        });
    }

    ngOnDestroy(): void {
        this.gameSub && this.gameSub.unsubscribe();
        this.routeSub && this.routeSub.unsubscribe();
    }

    getGameDetails(id: GameId): void {
        this.gameSub = this.detailsService.getDetails(id).subscribe((res: Game) => {
            this.game = res;
        });
    }
}

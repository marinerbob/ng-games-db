import {
    Component,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game, GameService } from 'src/app/core';
import { SORT_TYPES } from 'src/app/core/constants/sort-types.constant';
import { detectShallowInputChanged } from 'src/app/shared/helpers/changesDetection.helper';

@Component({
    selector: 'app-games-list',
    templateUrl: './games-list.component.html',
    styleUrls: ['./games-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GamesListComponent implements OnChanges, OnDestroy {
    @Input() sort: string;
    @Input() search: string;

    public games: Game[];

    private gameSub: Subscription;
    private routeSub: Subscription;

    constructor(private gameService: GameService, private router: Router) {}

    ngOnChanges(changes: SimpleChanges): void {
        let isSortChanged = detectShallowInputChanged(changes, 'sort');
        let isSearchChanged = detectShallowInputChanged(changes, 'search');

        if (isSortChanged || isSearchChanged) {
            this.searchGames(SORT_TYPES[this.sort], this.search);
        }
    }

    ngOnDestroy(): void {
        this.gameSub && this.gameSub.unsubscribe();
        this.routeSub && this.routeSub.unsubscribe();
    }

    trackByGameId(index: number, game: Game): number {
        return game.id;
    }

    searchGames(sort: string, search?: string): void {
        this.gameSub = this.gameService
            .getGameList(sort, search)
            .subscribe((gameList: APIResponse<Game>) => {
                this.games = gameList.results as Game[];
            });
    }

    openGameDetails(id: number) {
        this.router.navigate(['details', id]);
    }
}

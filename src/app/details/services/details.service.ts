import { Injectable } from '@angular/core';
import { forkJoin, Observable, map } from 'rxjs';
import { Game, GameId } from 'src/app/core';
import { RawgApiService } from 'src/app/core/services/rawg-api/rawg-api.service';

@Injectable({
    providedIn: 'root',
})
export class DetailsService {
    constructor(private rawgApi: RawgApiService) {}

    getDetails(id: GameId): Observable<Game> {
        const gameInfoReq = this.rawgApi.getGameDetails(id);
        const gameScreenshotsReq = this.rawgApi.getGameScreenshots(id);
        const gameTrailersReq = this.rawgApi.getGameTrailers(id);

        return forkJoin({
            gameInfoReq,
            gameScreenshotsReq,
            gameTrailersReq,
        }).pipe(
            map((res: any) => {
                return {
                    ...res['gameInfoReq'],
                    screenshots: [...res['gameScreenshotsReq'].results],
                    trailers: [...res['gameTrailersReq'].results],
                } as Game;
            }),
        );
    }
}

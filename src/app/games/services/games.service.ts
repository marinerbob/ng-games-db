import { Injectable } from '@angular/core';
import { APIGameParams } from 'src/app/core';
import { RawgApiService } from 'src/app/core/services/rawg-api/rawg-api.service';

@Injectable({
    providedIn: 'root',
})
export class GamesService {
    constructor(private rawgApi: RawgApiService) {}

    getGamesList(params: APIGameParams) {
        return this.rawgApi.getGames(params);
    }
}

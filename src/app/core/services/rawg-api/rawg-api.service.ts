import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment as env } from 'src/environments/environment';
import { APIGameParams, APIResponse, Game, GameId, Screenshot } from '../..';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class RawgApiService {
    private baseURL: string = `${env.BASE_URL}/games`;

    constructor(private http: HttpClient) {}

    getDetailsURL(id: GameId) {
        return `${this.baseURL}/${id}`;
    }

    getGames(params: APIGameParams = {}): Observable<APIResponse<Game>> {
        return this.http.get<APIResponse<Game>>(this.baseURL, {
            params,
        });
    }

    getGameDetails(id: GameId): Observable<APIResponse<Game>> {
        const detailsURL = this.getDetailsURL(id);

        return this.http.get<APIResponse<Game>>(detailsURL);
    }

    getGameScreenshots(id: GameId): Observable<APIResponse<Screenshot>> {
        const detailsURL = this.getDetailsURL(id);

        return this.http.get<APIResponse<Screenshot>>(`${detailsURL}/screenshots`);
    }

    getGameTrailers(id: GameId) {
        const detailsURL = this.getDetailsURL(id);

        return this.http.get<APIResponse<Screenshot>>(`${detailsURL}/movies`);
    }
}

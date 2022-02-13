import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

import { environment as env } from 'src/environments/environment';
 
import { APIResponse } from 'src/app/models/apiResponse';
import { Game } from 'src/app/models/game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams()
    .set('ordering', ordering);
    

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

  getGameDetails(
    id: string
  ): Observable<Game> {
    const gameInfoRequest = this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games/${id}`);
    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);
    const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);

    return forkJoin({
      gameInfoRequest,
      gameScreenshotsRequest,
      gameTrailersRequest
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          ...resp['gameScreenshotsRequest']?.results,
          ...resp['gameTrailersRequest']?.results
        } as Game;
      })
    )
  }
}

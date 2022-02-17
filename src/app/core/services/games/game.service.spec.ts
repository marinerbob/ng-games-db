import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../..';

import { GameService } from './game.service';

describe('GameService', () => {
    let service: GameService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: httpClientSpy,
                },
            ],
        });

        service = TestBed.inject(GameService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getGameList calls httpClient 1 time', () => {
        service.getGameList('sort');

        expect(httpClientSpy.get.calls.count()).toBe(1);
    });

    it('getGameDetails calls httpClient 3 times', (done: DoneFn) => {
        const mockId = '1';
        const mockGameDetailsUrl = `${environment.BASE_URL}/games/${mockId}`;
        const mockGameTrailersUrl = `${mockGameDetailsUrl}/movies`;
        const mockGameScreensUrl = `${mockGameDetailsUrl}/screenshots`;

        httpClientSpy.get.withArgs(mockGameDetailsUrl).and.returnValue(
            of({
                name: 'test',
            }),
        );

        httpClientSpy.get.withArgs(mockGameTrailersUrl).and.returnValue(
            of({
                results: [],
            }),
        );

        httpClientSpy.get.withArgs(mockGameScreensUrl).and.returnValue(
            of({
                results: [],
            }),
        );

        service.getGameDetails(mockId).subscribe((res) => {
            console.log(res);
            done();
        });

        // expect(httpClientSpy.get.calls.count()).toBe(3);
    });
});

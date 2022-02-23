import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { environment as env } from 'src/environments/environment';

import { RawgApiService } from './rawg-api.service';
import { APIGameParams } from '../..';

fdescribe('RawgApiService', () => {
    let baseURL: string;
    let service: RawgApiService;
    let httpClientSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        baseURL = `${env.BASE_URL}/games`;
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpClient,
                    useValue: httpClientSpy,
                },
            ],
        });

        service = TestBed.inject(RawgApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getDetailsUrl > return correct value', () => {
        const expectedURL = `${baseURL}/1`;

        expect(service.getDetailsURL(1)).toBe(expectedURL);
    });

    it('getGames > calls httpClient with baseURL', () => {
        service.getGames();

        let expectedArgs = [
            baseURL,
            {
                params: {} as APIGameParams,
            },
        ];

        console.log(httpClientSpy.get.calls.allArgs());

        expect(httpClientSpy.get.calls.count()).toBe(1);
        expect(httpClientSpy.get.calls.allArgs()).toBe([expectedArgs]);
    });
});

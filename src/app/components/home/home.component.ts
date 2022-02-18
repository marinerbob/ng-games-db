import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Game } from 'src/app/core';
import { SORT_TYPES } from 'src/app/core/constants/sort-types.constant';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    readonly selectSortItems = Object.keys(SORT_TYPES);

    public search: string;
    public sort: string;
    public games: Game[];

    private routeSub: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.routeSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.search = params['search'] ?? '';
            this.sort = SORT_TYPES[params['sort']] ? params['sort'] : 'Metacritic';
        });
    }

    ngOnDestroy(): void {
        this.routeSub && this.routeSub.unsubscribe();
    }

    onSortingChange(sort: string): void {
        this.router.navigate(['home'], {
            queryParams: { sort: sort },
            queryParamsHandling: 'merge',
        });
    }
}

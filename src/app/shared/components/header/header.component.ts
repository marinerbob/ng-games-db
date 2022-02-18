import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
    readonly searchForm = new FormGroup({
        search: new FormControl(''),
    });

    private routeSub: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.routeSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.searchForm.setValue({ search: params['search'] ?? '' });
        });
    }

    ngOnDestroy(): void {
        this.routeSub && this.routeSub.unsubscribe();
    }

    onSubmit() {
        let searchTerm = this.searchForm.controls['search'].value;
        this.router.navigate(['home'], {
            queryParams: { search: searchTerm },
            queryParamsHandling: 'merge',
        });
    }
}

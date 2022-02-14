import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public search = new FormControl('');

  private routeSub: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['search']) {
        this.search.setValue(params['search']);
      }
    })
  }

  ngOnDestroy(): void {
      this.routeSub && this.routeSub.unsubscribe();
  }

  onSubmit() {
    this.router.navigate(['home'], { queryParams: { search: this.search.value } })
  }

}

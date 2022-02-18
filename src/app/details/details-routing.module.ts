import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: ':id',
        component: DetailsComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsRoutingModule {}

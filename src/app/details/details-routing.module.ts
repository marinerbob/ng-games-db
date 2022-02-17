import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: ':id',
        component: DetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsRoutingModule {}

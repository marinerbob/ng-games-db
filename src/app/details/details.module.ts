import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { SharedModule } from '../shared';

@NgModule({
    declarations: [DetailsComponent, GameTabsComponent],
    imports: [CommonModule, SharedModule, DetailsRoutingModule],
})
export class DetailsModule {}

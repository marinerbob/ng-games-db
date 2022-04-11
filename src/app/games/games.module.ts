import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import { SharedModule } from '../shared';

@NgModule({
    declarations: [GamesListComponent],
    imports: [CommonModule, SharedModule],
    exports: [GamesListComponent],
})
export class GamesModule {}

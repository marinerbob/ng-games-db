import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiRootModule, TuiTextfieldControllerModule, TuiButtonModule, TuiDataListModule } from '@taiga-ui/core';
import { TuiInputModule, TuiIslandModule, TuiSelectModule, TuiDataListWrapperModule, TuiTabsModule, TuiCarouselModule } from '@taiga-ui/kit';

import { Title } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { BgImageDirective } from './directives/bg-image.directive';
import { MetacriticScoreDirective } from './directives/metacritic-score.directive';
import { GameCardComponent } from './components/game-card/game-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BgImageDirective,
    MetacriticScoreDirective,
    GameCardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiCarouselModule,
    TuiTabsModule,
    TuiIslandModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiInputModule
  ],
  providers: [
    Title
  ],
  exports: [
    HeaderComponent,
    GameCardComponent,
    CarouselComponent,
    BgImageDirective,
    MetacriticScoreDirective,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiCarouselModule,
    TuiTabsModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiInputModule
  ]
})
export class SharedModule { }

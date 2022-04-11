import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { Game } from 'src/app/core';

@Component({
    selector: 'app-game-tabs',
    templateUrl: './game-tabs.component.html',
    styleUrls: ['./game-tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class GameTabsComponent {
    @Input() game: Game;

    readonly gameTabs: ReadonlyArray<string> = ['About', 'Screenshots', 'Trailers'];

    public activeItemIndex: number = 0;
    public activeTab: string = this.gameTabs[this.activeItemIndex];

    constructor() {}

    onTabClick(activeTab: string) {
        this.activeTab = activeTab;
    }

    getTabIsOpened(targetTab: string) {
        return this.activeTab === targetTab;
    }
}

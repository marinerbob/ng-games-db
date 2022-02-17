import { Component, OnInit, Input } from '@angular/core';

import { Game } from 'src/app/core';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {
  @Input() game: Game;

  readonly gameTabs: ReadonlyArray<string> = [
    'About',
    'Screenshots',
    'Trailers'
  ]

  public activeItemIndex: number = 0;
  public activeTab: string = this.gameTabs[this.activeItemIndex];

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(activeTab: string) {
    this.activeTab = activeTab;
  }

  getTabIsOpened(targetTab: string) {
    return this.activeTab === targetTab;
  }

}

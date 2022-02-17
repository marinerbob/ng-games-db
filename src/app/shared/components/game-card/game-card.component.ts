import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Game } from 'src/app/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameCardComponent implements OnInit {
  @Input() game: Game;
  @Input() additionalClasses: string;

  @Output() onClickEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onLinkClick(value: number) {
    this.onClickEvent.emit(value);
  }

}

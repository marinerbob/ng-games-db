import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Game } from 'src/app/core';

@Component({
    selector: 'app-game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent {
    @Input() game: Game;
    @Input() additionalClasses: string;

    @Output() clickEvent = new EventEmitter<number>();

    constructor() {}

    onLinkClick(value: number) {
        this.clickEvent.emit(value);
    }
}

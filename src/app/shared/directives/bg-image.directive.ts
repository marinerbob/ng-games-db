import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBgImage]',
})
export class BgImageDirective implements OnInit {
    @Input() appBgImage: string;

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.style.backgroundImage = `url(${this.appBgImage})`;
    }
}

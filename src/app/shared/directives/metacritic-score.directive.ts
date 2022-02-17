import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appMetacriticScore]'
})
export class MetacriticScoreDirective implements OnInit {
  @Input() appMetacriticScore: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.color = '#fff';
    this.el.nativeElement.style.backgroundColor = this.getColor(this.appMetacriticScore);
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#50c22b';
    }
    if (value > 50) {
      return '#ded945';
    }
    if (value > 30) {
      return '#e09b34';
    }
    return '#d43d4b';
  }

}

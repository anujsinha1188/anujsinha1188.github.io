// Rating Component which displays the number of stars based on the input given

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  template: `
      <span *ngFor="let r of range; let i = index">
        <i class="glyphicon" [ngClass]="i < rate ? 'glyphicon-star' : 'glyphicon-star-empty'"></i>
      </span>
  `
})
export class RatingComponent {
  range: Array<number> = [1, 2, 3, 4, 5];
  @Input() rate: number;
}

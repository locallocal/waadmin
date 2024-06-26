import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the front card.
 */
@Component({
  standalone: true,
  selector: 'nb-card-front',
  template: '<ng-content select="nb-card"></ng-content>',
  imports: [
    CommonModule,
  ]
})
export class NbCardFrontComponent { }

/**
 * Component intended to be used within the `<nb-flip-card>` and `<nb-reveal-card>` components.
 *
 * Use it as a container for the back card.
 */
@Component({
  standalone: true,
  selector: 'nb-card-back',
  template: '<ng-content select="nb-card"></ng-content>',
})
export class NbCardBackComponent { }

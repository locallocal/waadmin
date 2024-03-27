import { Component } from '@angular/core';
import { EarningCardBackComponent } from './back-side/earning-card-back.component';
import { EarningCardFrontComponent } from './front-side/earning-card-front.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-earning-card',
    styleUrls: ['./earning-card.component.scss'],
    templateUrl: './earning-card.component.html',
    standalone: true,
    imports: [NbCardModule, EarningCardFrontComponent, NbIconModule, EarningCardBackComponent]
})
export class EarningCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}

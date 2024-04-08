import { Component } from '@angular/core';
import { StatsCardBackComponent } from './back-side/stats-card-back.component';
import { StatsCardFrontComponent } from './front-side/stats-card-front.component';
import { NbCardBackComponent, NbCardFrontComponent } from '../../../@theme/components/card/shared/shared.component';
import { NbFlipCardComponent } from '../../../@theme/components/card/flip-card/flip-card.component';
import { NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbIconComponent } from '../../../@theme/components/icon/icon.component';

@Component({
    selector: 'ngx-profit-card',
    styleUrls: ['./profit-card.component.scss'],
    templateUrl: './profit-card.component.html',
    standalone: true,
    imports: [
      NbFlipCardComponent,
      NbCardFrontComponent,
      NbCardComponent,
      NbCardBackComponent,
      StatsCardFrontComponent,
      StatsCardBackComponent,
      NbIconComponent,
    ]
})
export class ProfitCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}

import { Component } from '@angular/core';
import { StatsCardBackComponent } from './back-side/stats-card-back.component';
import { StatsCardFrontComponent } from './front-side/stats-card-front.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-profit-card',
    styleUrls: ['./profit-card.component.scss'],
    templateUrl: './profit-card.component.html',
    standalone: true,
    imports: [NbCardModule, StatsCardFrontComponent, NbIconModule, StatsCardBackComponent]
})
export class ProfitCardComponent {

  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}

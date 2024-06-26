import { Component, OnDestroy } from '@angular/core';
import { TrafficList, TrafficListData } from '../../../@core/data/traffic-list';
import { TrafficBarData, TrafficBar } from '../../../@core/data/traffic-bar';
import { takeWhile } from 'rxjs/operators';
import { TrafficBackCardComponent } from './back-side/traffic-back-card.component';
import { TrafficFrontCardComponent } from './front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-cards-header/traffic-cards-header.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-traffic-reveal-card',
    styleUrls: ['./traffic-reveal-card.component.scss'],
    templateUrl: './traffic-reveal-card.component.html',
    standalone: true,
    imports: [NbCardModule, TrafficCardsHeaderComponent, TrafficFrontCardComponent, NbIconModule, TrafficBackCardComponent]
})
export class TrafficRevealCardComponent implements OnDestroy {

  private alive = true;

  trafficBarData: TrafficBar;
  trafficListData: TrafficList;
  revealed = false;
  period: string = 'week';

  constructor(private trafficListService: TrafficListData,
              private trafficBarService: TrafficBarData) {
    this.getTrafficFrontCardData(this.period);
    this.getTrafficBackCardData(this.period);
  }

  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;

    this.getTrafficFrontCardData(value);
    this.getTrafficBackCardData(value);
  }

  getTrafficBackCardData(period: string) {
    this.trafficBarService.getTrafficBarData(period)
      .pipe(takeWhile(() => this.alive ))
      .subscribe(trafficBarData => {
        this.trafficBarData = trafficBarData;
      });
  }

  getTrafficFrontCardData(period: string) {
    this.trafficListService.getTrafficListData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(trafficListData => {
        this.trafficListData = trafficListData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

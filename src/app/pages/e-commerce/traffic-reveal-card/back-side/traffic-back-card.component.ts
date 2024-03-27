import { Component, Input, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { TrafficBarChartComponent } from './traffic-bar-chart.component';

@Component({
    selector: 'ngx-traffic-back-card',
    styleUrls: ['./traffic-back-card.component.scss'],
    templateUrl: './traffic-back-card.component.html',
    standalone: true,
    imports: [TrafficBarChartComponent]
})
export class TrafficBackCardComponent implements OnDestroy {

  private alive = true;

  @Input() trafficBarData: any;

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

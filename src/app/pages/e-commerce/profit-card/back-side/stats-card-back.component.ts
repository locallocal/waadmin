import { Component, OnDestroy } from '@angular/core';
import { StatsBarData } from '../../../../@core/data/stats-bar';
import { takeWhile } from 'rxjs/operators';
import { StatsAreaChartComponent } from './stats-area-chart.component';
import { NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-stats-card-back',
    styleUrls: ['./stats-card-back.component.scss'],
    templateUrl: './stats-card-back.component.html',
    standalone: true,
    imports: [NbCardModule, StatsAreaChartComponent]
})
export class StatsCardBackComponent implements OnDestroy {

  private alive = true;

  chartData: number[];

  constructor(private statsBarData: StatsBarData) {
    this.statsBarData.getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

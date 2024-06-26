import { Component } from '@angular/core';
import { ProfitBarAnimationChartData } from '../../../../@core/data/profit-bar-animation-chart';
import { takeWhile } from 'rxjs/operators';
import { StatsBarAnimationChartComponent } from './stats-bar-animation-chart.component';
import {
  NbCardBodyComponent,
  NbCardComponent,
  NbCardHeaderComponent,
} from '../../../../@theme/components/card/card.component';

@Component({
    selector: 'ngx-stats-card-front',
    styleUrls: ['./stats-card-front.component.scss'],
    templateUrl: './stats-card-front.component.html',
    standalone: true,
    imports: [
      NbCardComponent,
      NbCardBodyComponent,
      NbCardHeaderComponent,
      StatsBarAnimationChartComponent,
    ],
})
export class StatsCardFrontComponent {

  private alive = true;

  linesData: { firstLine: number[]; secondLine: number[] };

  constructor(private profitBarAnimationChartService: ProfitBarAnimationChartData) {
    this.profitBarAnimationChartService.getChartData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((linesData) => {
        this.linesData = linesData;
      });
  }
}

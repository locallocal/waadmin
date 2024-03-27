import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbCardModule, NbTabsetModule, NbListModule, NbIconModule, NbSelectModule, NbOptionModule } from '@nebular/theme';

import { Electricity, ElectricityChart, ElectricityData } from '../../../@core/data/electricity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ElectricityChartComponent } from './electricity-chart/electricity-chart.component';
import { MatRippleModule } from '@angular/material/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'ngx-electricity',
    styleUrls: ['./electricity.component.scss'],
    templateUrl: './electricity.component.html',
    standalone: true,
    imports: [NbCardModule, NbTabsetModule, NgFor, NbListModule, NbIconModule, NbSelectModule, MatRippleModule, NbOptionModule, ElectricityChartComponent]
})
export class ElectricityComponent implements OnDestroy {

  private alive = true;

  listData: Electricity[];
  chartData: ElectricityChart[];

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private electricityService: ElectricityData,
              private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    forkJoin(
      this.electricityService.getListData(),
      this.electricityService.getChartData(),
    )
      .pipe(takeWhile(() => this.alive))
      .subscribe(([listData, chartData]: [Electricity[], ElectricityChart[]] ) => {
        this.listData = listData;
        this.chartData = chartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

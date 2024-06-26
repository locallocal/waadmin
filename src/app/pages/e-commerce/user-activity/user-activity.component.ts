import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbCardModule, NbSelectModule, NbOptionModule, NbListModule, NbIconModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { NgFor } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'ngx-user-activity',
    styleUrls: ['./user-activity.component.scss'],
    templateUrl: './user-activity.component.html',
    standalone: true,
    imports: [NbCardModule, NbSelectModule, MatRippleModule, NgFor, NbOptionModule, NbListModule, NbIconModule]
})
export class ECommerceUserActivityComponent implements OnDestroy {

  private alive = true;

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private userActivityService: UserActivityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

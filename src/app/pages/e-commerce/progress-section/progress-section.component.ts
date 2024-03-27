import { Component, OnDestroy } from '@angular/core';
import { ProgressInfo, StatsProgressBarData } from '../../../@core/data/stats-progress-bar';
import { takeWhile } from 'rxjs/operators';
import { NumberWithCommasPipe } from '../../../@theme/pipes/number-with-commas.pipe';
import { NgFor } from '@angular/common';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';

@Component({
    selector: 'ngx-progress-section',
    styleUrls: ['./progress-section.component.scss'],
    templateUrl: './progress-section.component.html',
    standalone: true,
    imports: [NbCardModule, NgFor, NbProgressBarModule, NumberWithCommasPipe]
})
export class ECommerceProgressSectionComponent implements OnDestroy {

  private alive = true;

  progressInfoData: ProgressInfo[];

  constructor(private statsProgressBarService: StatsProgressBarData) {
    this.statsProgressBarService.getProgressInfoData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.progressInfoData = data;
      });
  }

  ngOnDestroy() {
    this.alive = true;
  }
}

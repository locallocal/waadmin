import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NbThemeService, NbSelectModule, NbOptionModule } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { NgFor } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'ngx-traffic-cards-header',
    styleUrls: ['./traffic-cards-header.component.scss'],
    templateUrl: './traffic-cards-header.component.html',
    standalone: true,
    imports: [NbSelectModule, MatRippleModule, NgFor, NbOptionModule]
})
export class TrafficCardsHeaderComponent implements OnDestroy {
  private alive = true;

  @Output() periodChange = new EventEmitter<string>();

  @Input() type: string = 'week';

  types: string[] = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  changePeriod(period: string): void {
    this.type = period;
    this.periodChange.emit(period);
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

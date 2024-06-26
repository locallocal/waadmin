import { Component } from '@angular/core';
import { NbCalendarRange, NbDateService, NbCalendarModule, NbCalendarRangeModule } from '@nebular/theme';
import { DayCellComponent } from './day-cell/day-cell.component';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'ngx-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss'],
    standalone: true,
    imports: [NbCalendarModule, NbCalendarRangeModule, DatePipe]
})
export class CalendarComponent {

  date = new Date();
  date2 = new Date();
  range: NbCalendarRange<Date>;
  dayCellComponent = DayCellComponent;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
}

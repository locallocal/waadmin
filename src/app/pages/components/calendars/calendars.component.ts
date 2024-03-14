import { Component, inject } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbCalendarComponent } from '../../../@theme/components/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { NbCalendarRangeComponent } from '../../../@theme/components/calendar/calendar-range.component';
import { NbCalendarRange } from '../../../@theme/components/calendar/calendar-range.component';
import { NbDateService } from '../../../@theme/components/calendar-kit/services/date.service';
import { NbNativeDateService } from '../../../@theme/components/calendar-kit/services/native-date.service';

@Component({
  standalone: true,
  selector: 'calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css'],
  providers: [{
    provide: NbDateService, useClass: NbNativeDateService,
  }],
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbCalendarComponent,
    NbCalendarRangeComponent,
    CommonModule,
  ]
})
export class CalendarsComponent {
  date = new Date();
  range: NbCalendarRange<Date>;

  constructor(private dateService:NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, +3),
      end: this.dateService.addDay(this.monthEnd, -3),
    }
  };

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }
}

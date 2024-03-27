import { Component } from '@angular/core';
import { CalendarKitMonthCellComponent } from './month-cell/month-cell.component';
import { NbCardModule, NbCalendarKitModule } from '@nebular/theme';

@Component({
    selector: 'ngx-calendar-kit',
    templateUrl: 'calendar-kit.component.html',
    styleUrls: ['calendar-kit.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbCalendarKitModule]
})
export class CalendarKitFullCalendarShowcaseComponent {
  month = new Date();
  monthCellComponent = CalendarKitMonthCellComponent;
}

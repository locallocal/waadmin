import { Component } from '@angular/core';
import { NbDateService } from '@nebular/theme';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbDatepickerComponent, NbRangepickerComponent } from '../../../@theme/components/datepicker/datepicker.component';
import { NbDatepickerDirective } from '../../../@theme/components/datepicker/datepicker.directive';

@Component({
  standalone: true,
  selector: 'ngx-datepicker',
  templateUrl: 'datepicker.component.html',
  styleUrls: ['datepicker.component.scss'],
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbDatepickerDirective,
    NbDatepickerComponent,
    NbRangepickerComponent,
  ]
})
export class DatepickerComponent {

  min: Date;
  max: Date;

  constructor(protected dateService: NbDateService<Date>) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }
}

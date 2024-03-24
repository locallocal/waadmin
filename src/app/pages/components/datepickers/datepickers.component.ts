import { Component } from '@angular/core';
import { NbDatepickerComponent } from '../../../@theme/components/datepicker/datepicker.component';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbDatepickerDirective } from '../../../@theme/components/datepicker/datepicker.directive';
import { NbInputDirective } from '../../../@theme/components/input/input.directive';

@Component({
  standalone: true,
  selector: 'datepickers',
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbInputDirective,
    NbDatepickerDirective,
    NbDatepickerComponent,
  ],
})
export class DatepickersComponent {

}

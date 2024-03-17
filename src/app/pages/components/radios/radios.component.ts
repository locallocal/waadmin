import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbRadioComponent } from '../../../@theme/components/radio/radio.component';
import { NbRadioGroupComponent } from '../../../@theme/components/radio/radio-group.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbComponentStatus } from '../../../@theme/components/component-status';

@Component({
  standalone: true,
  selector: 'radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardHeaderComponent,
    NbRadioComponent,
    NbRadioGroupComponent,
    FormsModule,
    CommonModule,
  ]
})
export class RadiosComponent {
  options00 = [
    { value: 'This is value 1', label: 'Option 1' },
    { value: 'This is value 2', label: 'Option 2' },
    { value: 'This is value 3', label: 'Option 3'},
    { value: 'This is value 4', label: 'Option 4' },
  ];
  option00: object;

  options01= [
    { value: 'This is value 1', label: 'Option 1', checked: true },
    { value: 'This is value 2', label: 'Option 2' },
    { value: 'This is value 3', label: 'Option 3', disabled: true},
    { value: 'This is value 4', label: 'Option 4' },
    { value: 'This is value 5', label: 'Option 5', disabled: true},
  ];
  option01: object;

  status: NbComponentStatus[] = ['basic', 'primary', 'success', 'info', 'warning', 'danger'];
}

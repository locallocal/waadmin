import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbCheckboxComponent } from '../../../@theme/components/checkbox/checkbox.component';
import { NbRadioComponent } from '../../../@theme/components/radio/radio.component';
import { NbRadioGroupComponent } from '../../../@theme/components/radio/radio-group.component';

@Component({
  standalone: true,
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbCheckboxComponent,
    NbRadioGroupComponent,
    NbRadioComponent,
  ]
})
export class FormLayoutsComponent {

}

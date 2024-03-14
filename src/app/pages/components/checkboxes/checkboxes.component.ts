import { Component } from '@angular/core';
import { NbCheckboxComponent } from '../../../@theme/components/checkbox/checkbox.component';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';

@Component({
  standalone: true,
  selector: 'checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbCheckboxComponent,
  ]
})
export class CheckboxesComponent {
  checked: boolean = false;

  toggle(checked: boolean){
    this.checked = checked;
  }
}

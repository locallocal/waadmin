import { Component } from '@angular/core';
import { NbToggleComponent } from '../../../@theme/components/toggle/toggle.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';

@Component({
  standalone: true,
  selector: 'toggles',
  templateUrl: './toggles.component.html',
  styleUrls: ['./toggles.component.css'],
  imports: [
    NbToggleComponent,
    FormsModule,
    ReactiveFormsModule,
    NbCardComponent,
    NbCardBodyComponent,
  ]
})
export class TogglesComponent {

  toggleNgModel:boolean = true;
  toggleFormControl:FormControl = new FormControl()
}

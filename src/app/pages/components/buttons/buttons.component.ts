import { Component } from '@angular/core';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbIconComponent } from '../../../@theme/components/icon/icon.component';

@Component({
  standalone: true,
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  imports: [
    NbButtonComponent,
    NbIconComponent,
  ],
})
export class ButtonsComponent {
  constructor() { }

  onClick() {
    console.log('clicked');
  }
}

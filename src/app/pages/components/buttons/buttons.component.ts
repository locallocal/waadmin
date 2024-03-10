import { Component } from '@angular/core';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbIconModule } from '@nebular/theme';

@Component({
  standalone: true,
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  imports: [
    NbButtonComponent,
    NbIconModule,
  ],
})
export class ButtonsComponent {
  constructor() { }

  onClick() {
    console.log('clicked');
  }
}

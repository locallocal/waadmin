import { Component } from '@angular/core';
import { NbAlertComponent } from '../../../@theme/components/alert/alert.component';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';

@Component({
  standalone: true,
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  imports: [
    NbAlertComponent,
    NbCardComponent,
    NbCardBodyComponent,
  ],
})
export class AlertsComponent {

}

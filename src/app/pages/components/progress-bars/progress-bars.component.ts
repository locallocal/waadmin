import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbProgressBarComponent } from '../../../@theme/components/progress-bar/progress-bar.component';

@Component({
  standalone: true,
  selector: 'progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbProgressBarComponent,
  ]
})
export class ProgressBarsComponent {

}

import { Component } from '@angular/core';
import { NbBadgeComponent } from '../../../@theme/components/badge/badge.component';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';

@Component({
  standalone: true,
  selector: 'badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css'],
  imports: [
    NbBadgeComponent,
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
  ]
})
export class BadgesComponent {

}

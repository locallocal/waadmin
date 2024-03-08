import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardFooterComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';


@Component({
  standalone: true,
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardHeaderComponent,
    NbCardFooterComponent,
  ],
})
export class CardsComponent {

}

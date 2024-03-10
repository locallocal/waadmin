import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbIconComponent } from '../../../@theme/components/icon/icon.component';

@Component({
  standalone: true,
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  imports: [
    NbIconComponent,
    NbCardComponent,
    NbCardBodyComponent,
  ],
  providers: [
    NbIconComponent,
  ],
})
export class IconsComponent {

}

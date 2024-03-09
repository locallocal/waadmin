import { Component } from '@angular/core';
import { NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbListComponent } from '../../../@theme/components/list/list.component';
import { fruits } from '../../layout/list/fruits-list';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbListComponent,
    CommonModule,
  ],
})
export class ListsComponent {
  fruits = fruits;
}

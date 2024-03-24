import { Component } from '@angular/core';
import { fruits } from './fruits-list';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbListComponent, NbListItemComponent } from '../../../@theme/components/list/list.component';
import { NbUserComponent } from '../../../@theme/components/user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbListComponent,
    NbListItemComponent,
    NbUserComponent,
    CommonModule,
  ]
})
export class ListComponent {
  fruits = fruits;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
}

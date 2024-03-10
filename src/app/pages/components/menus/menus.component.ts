import { Component } from '@angular/core';
import { NbMenuComponent } from '../../../@theme/components/menu/menu.component';
import { NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbMenuItem } from '../../../@theme/components/menu/menu.service';

@Component({
  standalone: true,
  selector: 'menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  imports: [
    NbMenuComponent,
    NbCardComponent,
  ],
})
export class MenusComponent {

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      icon: 'person-outline',
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
    },
    {
      title: 'Privacy Policy',
      icon: { icon: 'checkmark-outline', pack: 'eva' },
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
}

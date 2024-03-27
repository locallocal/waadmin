import { Component, ElementRef } from '@angular/core';
import { NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbContextMenuComponent } from '../../../@theme/components/context-menu/context-menu.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbContextMenuDirective } from '../../../@theme/components/context-menu/context-menu.directive';

@Component({
  standalone: true,
  selector: 'context-menus',
  templateUrl: './context-menus.component.html',
  styleUrls: ['./context-menus.component.css'],
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbButtonComponent,
    NbContextMenuComponent,
    NbContextMenuDirective,
  ],
  providers: [
    ElementRef,
  ]
})
export class ContextMenusComponent {
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
}

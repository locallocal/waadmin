import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { RouterOutlet } from '@angular/router';
import { OneColumnLayoutComponent } from '../@theme/layouts/one-column/one-column.layout';
import { NbMenuComponent } from '../@theme/components/menu/menu.component';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
    standalone: true,
    imports: [
      OneColumnLayoutComponent,
      NbMenuComponent,
      RouterOutlet,
    ]
})
export class PagesComponent {

  menu = MENU_ITEMS;
}

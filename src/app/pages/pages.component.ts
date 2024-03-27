import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { RouterOutlet } from '@angular/router';
import { NbMenuModule } from '@nebular/theme';
import { OneColumnLayoutComponent } from '../@theme/layouts/one-column/one-column.layout';

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
    imports: [OneColumnLayoutComponent, NbMenuModule, RouterOutlet]
})
export class PagesComponent {

  menu = MENU_ITEMS;
}

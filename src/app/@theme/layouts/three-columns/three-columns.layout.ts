import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NbSidebarModule } from '@nebular/theme';
import {
  NbLayoutColumnComponent,
  NbLayoutComponent,
  NbLayoutFooterComponent,
  NbLayoutHeaderComponent,
} from '../../components/layout/layout.component';

@Component({
    selector: 'ngx-three-columns-layout',
    styleUrls: ['./three-columns.layout.scss'],
    template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
    standalone: true,
    imports: [
      NbLayoutComponent,
      NbLayoutHeaderComponent,
      NbLayoutColumnComponent,
      NbLayoutFooterComponent,
      HeaderComponent,
      NbSidebarModule,
      FooterComponent,
    ]
})
export class ThreeColumnsLayoutComponent {}

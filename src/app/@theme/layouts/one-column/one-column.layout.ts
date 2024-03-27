import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { NbLayoutColumnComponent, NbLayoutComponent, NbLayoutFooterComponent, NbLayoutHeaderComponent } from '../../components/layout/layout.component';
import { NbSidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
    selector: 'ngx-one-column-layout',
    styleUrls: ['./one-column.layout.scss'],
    template: `
    <nb-layout withScroll>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
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
      NbLayoutFooterComponent,
      NbLayoutColumnComponent,
      NbSidebarComponent,
      HeaderComponent,
      FooterComponent]
})
export class OneColumnLayoutComponent {}

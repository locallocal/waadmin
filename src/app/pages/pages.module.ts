import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ComponentsComponent } from './components/components.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListsComponent } from './components/lists/lists.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ComponentsComponent,
    CardsComponent,
    ListsComponent,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}

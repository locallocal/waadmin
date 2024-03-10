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
import { TogglesComponent } from './components/toggles/toggles.component';
import { NbLayoutDirectionService } from '../@theme/services/direction.service';
import { AccordionsComponent } from './components/accordions/accordions.component';

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
    TogglesComponent,
    AccordionsComponent
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    NbLayoutDirectionService
  ]
})
export class PagesModule {
}

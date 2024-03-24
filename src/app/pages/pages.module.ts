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
import { AlertsComponent } from './components/alerts/alerts.component';
import { MenusComponent } from './components/menus/menus.component';
import { NB_WINDOW } from '../@theme/theme.options';
import { NbMenuInternalService } from '../@theme/components/menu/menu.service';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { AutocompletesComponent } from './components/autocompletes/autocompletes.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ButtongroupsComponent } from './components/buttongroups/buttongroups.component';
import { NB_DATE_ADAPTER } from '../@theme/components/datepicker/datepicker.directive';
import { NbDateAdapterService, NbDateTimeAdapterService, NbRangeAdapterService } from '../@theme/components/datepicker/datepicker-adapter';
import { NbDateService } from '../@theme/components/calendar-kit/services/date.service';
import { NbNativeDateService } from '../@theme/components/calendar-kit/services/native-date.service';
import { NbViewportRulerAdapter } from '../@theme/components/cdk/adapter/viewport-ruler-adapter';
import { NbLayoutRulerService } from '../@theme/services/ruler.service';
import { NbLayoutScrollService } from '../@theme/services/scroll.service';
import { NbOverlay, NbOverlayPositionBuilder } from '../@theme/components/cdk/overlay/mapping';
import { NbPositionBuilderService } from '../@theme/components/cdk/overlay/overlay-position';
import { NbTriggerStrategyBuilderService } from '../@theme/components/cdk/overlay/overlay-trigger';
import { NbOverlayService } from '../@theme/components/cdk/overlay/overlay-service';

export function windowFactory(platformId: Object): Window | undefined {
  if (isPlatformBrowser(platformId)) {
    return window;
  }

  // Provide undefined to get the error when trying to access the window as it
  // shouldn't be used outside the browser. Those who need to provide something
  // instead of window (e.g. domino window when running in node) could override
  // NB_WINDOW token.
  return undefined;
}

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ComponentsComponent,
    AlertsComponent,
    BadgesComponent,
    ButtongroupsComponent,
    CardsComponent,
    ListsComponent,
    MenusComponent,
    TogglesComponent,
    AccordionsComponent,
    AutocompletesComponent,
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    NbPositionBuilderService,
    NbTriggerStrategyBuilderService,
    NbOverlayService,
    NbLayoutDirectionService,
    NbMenuInternalService,
    NbViewportRulerAdapter,
    NbLayoutRulerService,
    NbLayoutScrollService,
    NbOverlayPositionBuilder,
    NbOverlay,
    { provide: NbDateService, useClass: NbNativeDateService },
    { provide: NB_WINDOW, useFactory: windowFactory, deps: [ PLATFORM_ID ] },
    { provide: NB_DATE_ADAPTER, multi: true, useClass: NbDateAdapterService },
    { provide: NB_DATE_ADAPTER, multi: true, useClass: NbRangeAdapterService },
    { provide: NB_DATE_ADAPTER, multi: true, useClass: NbDateTimeAdapterService },
  ],
})
export class PagesModule {
}

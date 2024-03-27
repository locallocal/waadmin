/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { RouterOutlet } from '@angular/router';

import { NB_BUILT_IN_JS_THEMES, NB_DOCUMENT, NB_JS_THEMES, NB_MEDIA_BREAKPOINTS, NB_THEME_OPTIONS, NB_WINDOW } from './@theme/theme.options';
import { windowFactory } from '@nebular/theme';
import { BUILT_IN_THEMES, NbJSThemesRegistry } from './@theme/services/js-themes-registry.service';
import { DOCUMENT } from '@angular/common';
import { NbThemeService } from './@theme/services/theme.service';
import { NbMediaBreakpointsService } from './@theme/services/breakpoints.service';
import { NbSpinnerService } from './@theme/services/spinner.service';
import { NbLayoutScrollService } from './@theme/services/scroll.service';
import { NbLayoutRulerService } from './@theme/services/ruler.service';
import { NbRestoreScrollTopHelper } from './@theme/components/layout/restore-scroll-top.service';
import { NbSidebarService } from './@theme/components/sidebar/sidebar.service';
import { NbOverlayService } from './@theme/components/cdk/overlay/overlay-service';
import { NbOverlay, NbOverlayPositionBuilder } from './@theme/components/cdk/overlay/mapping';
import { NbPositionBuilderService } from './@theme/components/cdk/overlay/overlay-position';
import { NbViewportRulerAdapter } from './@theme/components/cdk/adapter/viewport-ruler-adapter';
import { NbFocusKeyManagerFactoryService } from './@theme/components/cdk/a11y/focus-key-manager';
import { NbSearchService } from './@theme/components/search/search.service';
import { CountryOrdersMapService } from './pages/e-commerce/country-orders/map/country-orders-map.service';
import { NbOverlayContainerAdapter } from './@theme/components/cdk/adapter/overlay-container-adapter';

export const DEFAULT_MEDIA_BREAKPOINTS = [
  {
    name: 'xs',
    width: 0,
  },
  {
    name: 'is',
    width: 400,
  },
  {
    name: 'sm',
    width: 576,
  },
  {
    name: 'md',
    width: 768,
  },
  {
    name: 'lg',
    width: 992,
  },
  {
    name: 'xl',
    width: 1200,
  },
  {
    name: 'xxl',
    width: 1400,
  },
  {
    name: 'xxxl',
    width: 1600,
  },
];

@Component({
    selector: 'ngx-app',
    template: '<router-outlet></router-outlet>',
    standalone: true,
    imports: [
      RouterOutlet,
    ],
    
    providers: [
      NbThemeService,
      NbMediaBreakpointsService,
      NbJSThemesRegistry,
      NbSpinnerService,
      NbLayoutScrollService,
      NbLayoutRulerService,
      NbRestoreScrollTopHelper,
      NbSidebarService,
      NbOverlayService,
      NbOverlay,
      NbPositionBuilderService,
      NbViewportRulerAdapter,
      NbOverlayPositionBuilder,
      NbFocusKeyManagerFactoryService,
      NbSearchService,
      CountryOrdersMapService,
      NbOverlayContainerAdapter,
      { provide: NB_THEME_OPTIONS, useValue: { name: 'default' } || {} },
      { provide: NB_BUILT_IN_JS_THEMES, useValue: BUILT_IN_THEMES },
      { provide: NB_JS_THEMES, useValue: [] },
      { provide: NB_MEDIA_BREAKPOINTS, useValue: DEFAULT_MEDIA_BREAKPOINTS },
      { provide: NB_DOCUMENT, useExisting: DOCUMENT },
      { provide: NB_WINDOW, useFactory: windowFactory, deps: [ PLATFORM_ID ] },
    ]
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}

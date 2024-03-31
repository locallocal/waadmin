import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { SearchComponent } from './search-fields/search-fields.component';

export const UI_FEATURES_ROUTES: Route[]  = [{
  path: '',
  component: UiFeaturesComponent,
  children: [ {
    path: 'grid',
    component: GridComponent,
  }, {
    path: 'icons',
    component: IconsComponent,
  }, {
    path: 'typography',
    component: TypographyComponent,
  }, {
    path: 'search-fields',
    component: SearchComponent,
  }],
}];


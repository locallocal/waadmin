import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const MISCELLANEOUS_ROUTES: Route[] = [
  {
    path: '',
    component: MiscellaneousComponent,
    children: [
      {
        path: '404',
        component: NotFoundComponent,
      },
    ],
  },
];



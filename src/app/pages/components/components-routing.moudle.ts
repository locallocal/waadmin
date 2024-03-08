import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";


export const COMPONENTS_ROUTES: Route[] = [
    {path: 'buttons', component: ButtonsComponent},
]


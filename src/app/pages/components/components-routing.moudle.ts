import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";


export const COMPONENTS_ROUTES: Route[] = [
    {path: 'buttons', component: ButtonsComponent},
    {path: 'cards', component: CardsComponent},
]


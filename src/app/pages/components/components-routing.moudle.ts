import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { ListsComponent } from "./lists/lists.component";

export const COMPONENTS_ROUTES: Route[] = [
    {path: 'buttons', component: ButtonsComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'lists', component: ListsComponent},
]


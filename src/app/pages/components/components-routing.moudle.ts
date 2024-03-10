import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { ListsComponent } from "./lists/lists.component";
import { TogglesComponent } from "./toggles/toggles.component";
import { AccordionComponent } from "../layout/accordion/accordion.component";
import { AccordionsComponent } from "./accordions/accordions.component";
import { ActionsComponent } from "./actions/actions.component";
import { IconsComponent } from "./icons/icons.component";

export const COMPONENTS_ROUTES: Route[] = [
    {path: 'accordions', component: AccordionsComponent},
    {path: 'actions', component: ActionsComponent},
    {path: 'buttons', component: ButtonsComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'toggles', component: TogglesComponent}
]


import { NgModule } from "@angular/core";
import { Route } from "@angular/router";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { ListsComponent } from "./lists/lists.component";
import { TogglesComponent } from "./toggles/toggles.component";
import { AccordionsComponent } from "./accordions/accordions.component";
import { ActionsComponent } from "./actions/actions.component";
import { IconsComponent } from "./icons/icons.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { MenusComponent } from "./menus/menus.component";
import { AutocompletesComponent } from "./autocompletes/autocompletes.component";
import { BadgesComponent } from "./badges/badges.component";
import { ButtongroupsComponent } from "./buttongroups/buttongroups.component";
import { CalendarsComponent } from "./calendars/calendars.component";
import { CheckboxesComponent } from "./checkboxes/checkboxes.component";
import { ContextMenusComponent } from "./context-menus/context-menus.component";
import { DatepickersComponent } from "./datepickers/datepickers.component";
import { DialogsComponent } from "./dialogs/dialogs.component";
import { InputsComponent } from "./inputs/inputs.component";
import { PopoversComponent } from "./popovers/popovers.component";
import { ProgressBarsComponent } from "./progress-bars/progress-bars.component";
import { RadiosComponent } from "./radios/radios.component";
import { TagsComponent } from "./tags/tags.component";
import { ToastrsComponent } from "./toastrs/toastrs.component";
import { TooltipsComponent } from "./tooltips/tooltips.component";

export const COMPONENTS_ROUTES: Route[] = [
    {path: 'accordions', component: AccordionsComponent},
    {path: 'actions', component: ActionsComponent},
    {path: 'alerts', component: AlertsComponent},
    {path: 'autocompletes', component: AutocompletesComponent},
    {path: 'badges', component: BadgesComponent},
    {path: 'buttons', component: ButtonsComponent},
    {path: 'buttongroups', component: ButtongroupsComponent},
    {path: 'calendars', component: CalendarsComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'checkboxes', component: CheckboxesComponent},
    {path: 'context-menus', component: ContextMenusComponent},
    // {path: 'datepickers', component: DatepickersComponent},
    {path: 'dialogs', component: DialogsComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'inputs', component: InputsComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'menus', component: MenusComponent},
    {path: 'popovers', component: PopoversComponent},
    {path: 'progress-bars', component: ProgressBarsComponent},
    {path: 'radios', component: RadiosComponent},
    {path: 'tags', component: TagsComponent},
    {path: 'toastrs', component: ToastrsComponent},
    {path: 'toggles', component: TogglesComponent},
    {path: 'tooltips', component: TooltipsComponent},
]


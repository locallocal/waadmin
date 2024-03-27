import { Component } from '@angular/core';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popover-examples.component';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { NbCardModule, NbButtonModule, NbPopoverModule, NbTabsetModule } from '@nebular/theme';

@Component({
    selector: 'ngx-popovers',
    styleUrls: ['./popovers.component.scss'],
    templateUrl: './popovers.component.html',
    standalone: true,
    imports: [NbCardModule, NbButtonModule, MatRippleModule, NbPopoverModule, NbTabsetModule, FormsModule]
})
export class PopoversComponent {
  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
}

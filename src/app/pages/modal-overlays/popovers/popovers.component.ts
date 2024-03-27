import { Component } from '@angular/core';
import {
  NgxPopoverCardComponent, NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from './popover-examples.component';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
<<<<<<< HEAD
import { NbCardModule, NbButtonModule, NbPopoverModule, NbTabsetModule } from '@nebular/theme';
=======
import { NbTabsetModule } from '@nebular/theme';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbPopoverComponent } from '../../../@theme/components/popover/popover.component';
import { NbPopoverDirective } from '../../../@theme/components/popover/popover.directive';
>>>>>>> ffc42f2f (feat chore: migrate to standalone component.)

@Component({
    selector: 'ngx-popovers',
    styleUrls: ['./popovers.component.scss'],
    templateUrl: './popovers.component.html',
    standalone: true,
<<<<<<< HEAD
    imports: [NbCardModule, NbButtonModule, MatRippleModule, NbPopoverModule, NbTabsetModule, FormsModule]
=======
    imports: [
      NbCardComponent,
      NbCardHeaderComponent,
      NbCardBodyComponent,
      NbButtonComponent,
      MatRippleModule,
      NbPopoverComponent,
      NbPopoverDirective,
      NbTabsetModule,
      FormsModule,
    ]
>>>>>>> ffc42f2f (feat chore: migrate to standalone component.)
})
export class PopoversComponent {
  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
}

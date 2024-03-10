import { Component } from '@angular/core';
import { NbActionComponent, NbActionsComponent } from '../../../@theme/components/actions/actions.component';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbIconConfig } from '../../../@theme/components/icon/icon.component';

@Component({
  standalone: true,
  selector: 'actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  imports: [
    NbActionsComponent,
    NbActionComponent,
    NbCardComponent,
    NbCardBodyComponent,
  ],
})
export class ActionsComponent {

  disabledIconConfig: NbIconConfig = { icon: 'settings-2', pack: 'eva' };
}

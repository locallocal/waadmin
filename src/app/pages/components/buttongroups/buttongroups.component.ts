import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbButtonGroupComponent } from '../../../@theme/components/button-group/button-group.component';
import { NbButtonToggleDirective } from '../../../@theme/components/button-group/button-toggle.directive';

@Component({
  standalone: true,
  selector: 'buttongroups',
  templateUrl: './buttongroups.component.html',
  styleUrls: ['./buttongroups.component.scss'],
  imports: [
    NbButtonGroupComponent,
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbButtonToggleDirective,
  ]
})
export class ButtongroupsComponent {
  isBold = false;
  isItalic = false;
  isUnderline = false;
}

import { Component } from '@angular/core';
import { NbDialogRef, NbButtonModule } from '@nebular/theme';
import { MatRippleModule } from '@angular/material/core';
import { NbCardBodyComponent, NbCardComponent, NbCardFooterComponent, NbCardHeaderComponent } from '../../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../../@theme/components/button/button.component';
import { NbInputDirective } from '../../../../@theme/components/input/input.directive';

@Component({
    selector: 'ngx-dialog-name-prompt',
    templateUrl: 'dialog-name-prompt.component.html',
    styleUrls: ['dialog-name-prompt.component.scss'],
    standalone: true,
    imports: [
      NbCardComponent,
      NbCardHeaderComponent,
      NbCardBodyComponent,
      NbCardFooterComponent,
      NbButtonComponent,
      NbInputDirective,
      MatRippleModule,
    ]
})
export class DialogNamePromptComponent {

  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }
}

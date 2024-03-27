import { Component } from '@angular/core';
import { NbDialogRef, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'ngx-dialog-name-prompt',
    templateUrl: 'dialog-name-prompt.component.html',
    styleUrls: ['dialog-name-prompt.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbInputModule, NbButtonModule, MatRippleModule]
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

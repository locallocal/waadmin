import { Component, Input } from '@angular/core';
import { NbDialogRef, NbCardModule, NbButtonModule } from '@nebular/theme';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'ngx-showcase-dialog',
    templateUrl: 'showcase-dialog.component.html',
    styleUrls: ['showcase-dialog.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbButtonModule, MatRippleModule]
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {}

  dismiss() {
    this.ref.close();
  }
}

import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { MatRippleModule } from '@angular/material/core';
import { NbCardBodyComponent, NbCardComponent, NbCardFooterComponent, NbCardHeaderComponent } from '../../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../../@theme/components/button/button.component';

@Component({
    selector: 'ngx-showcase-dialog',
    templateUrl: 'showcase-dialog.component.html',
    styleUrls: ['showcase-dialog.component.scss'],
    standalone: true,
    imports: [
      NbCardComponent,
      NbCardHeaderComponent,
      NbCardBodyComponent,
      NbCardFooterComponent,
      NbButtonComponent,
      MatRippleModule,
    ]
})
export class ShowcaseDialogComponent {

  @Input() title: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {}

  dismiss() {
    this.ref.close();
  }
}

import { Component } from '@angular/core';
import { TinyMCEComponent } from '../../../@theme/components';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';

@Component({
  standalone: true,
  selector: 'ngx-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <ngx-tiny-mce></ngx-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
  imports: [
    TinyMCEComponent,
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
  ]
})
export class TinyMCEComponentPage {
}

import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { CKEditorModule } from 'ng2-ckeditor';

@Component({
  standalone: true,
  selector: 'ngx-ckeditor',
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    CKEditorModule,
  ]
})
export class CKEditorComponent {
}

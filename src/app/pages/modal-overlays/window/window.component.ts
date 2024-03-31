import { Component, TemplateRef, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { NbWindowService, NbCardModule, NbButtonModule } from '@nebular/theme';
import { WindowFormComponent } from './window-form/window-form.component';
import { MatRippleModule } from '@angular/material/core';
=======
import { NbWindowService } from '../../../@theme/components/window/window.service';
import { WindowFormComponent } from './window-form/window-form.component';
import { MatRippleModule } from '@angular/material/core';
import { NbCardBodyComponent, NbCardComponent, NbCardFooterComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
>>>>>>> ffc42f2f (feat chore: migrate to standalone component.)

@Component({
    selector: 'ngx-window',
    templateUrl: 'window.component.html',
    styleUrls: ['window.component.scss'],
    standalone: true,
<<<<<<< HEAD
    imports: [NbCardModule, NbButtonModule, MatRippleModule]
=======
    imports: [
      NbCardComponent,
      NbCardHeaderComponent,
      NbCardBodyComponent,
      NbCardFooterComponent,
      NbButtonComponent,
      MatRippleModule,
    ]
>>>>>>> ffc42f2f (feat chore: migrate to standalone component.)
})
export class WindowComponent {

  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private windowService: NbWindowService) {}

  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Window content from template',
        context: {
          text: 'some text to pass into template',
        },
      },
    );
  }

  openWindowForm() {
    this.windowService.open(WindowFormComponent, { title: `Window` });
  }

  openWindowWithoutBackdrop() {
    this.windowService.open(
      this.disabledEscTemplate,
      {
        title: 'Window without backdrop',
        hasBackdrop: false,
        closeOnEsc: false,
      },
    );
  }
}

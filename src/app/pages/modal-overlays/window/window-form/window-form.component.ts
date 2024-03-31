import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NbInputDirective } from '../../../../@theme/components/input/input.directive';

@Component({
    template: `
    <form class="form">
      <label for="subject">Subject:</label>
      <input nbInput id="subject" type="text">

      <label class="text-label" for="text">Text:</label>
      <textarea nbInput id="text"></textarea>
    </form>
  `,
    styleUrls: ['window-form.component.scss'],
    standalone: true,
    imports: [
      FormsModule,
      NbInputDirective,
    ]
})
export class WindowFormComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-modal-overlays',
    template: `
    <router-outlet></router-outlet>
  `,
    standalone: true,
    imports: [RouterOutlet]
})

export class ModalOverlaysComponent {
}

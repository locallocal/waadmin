import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-maps',
    template: `
    <router-outlet></router-outlet>
  `,
    standalone: true,
    imports: [RouterOutlet]
})
export class MapsComponent {
}

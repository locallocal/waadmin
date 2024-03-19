import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ngx-form-elements',
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [
    RouterOutlet,
  ]
})
export class FormsComponent {
}

import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'ngx-tables',
  template: `<router-outlet></router-outlet>`,
  imports: [
    RouterLink,
    RouterModule,
  ]
})
export class TablesComponent {
}

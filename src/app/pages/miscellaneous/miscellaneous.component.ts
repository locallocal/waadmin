import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngx-miscellaneous',
    template: `
    <router-outlet></router-outlet>
  `,
    standalone: true,
<<<<<<< HEAD
    imports: [RouterOutlet]
=======
    imports: [
      RouterOutlet,
    ]
>>>>>>> ffc42f2f (feat chore: migrate to standalone component.)
})
export class MiscellaneousComponent {
}

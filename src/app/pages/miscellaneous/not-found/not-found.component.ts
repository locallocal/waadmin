import { NbMenuService, NbCardModule, NbButtonModule } from '@nebular/theme';
import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
    selector: 'ngx-not-found',
    styleUrls: ['./not-found.component.scss'],
    templateUrl: './not-found.component.html',
    standalone: true,
    imports: [NbCardModule, NbButtonModule, MatRippleModule]
})
export class NotFoundComponent {

  constructor(private menuService: NbMenuService) {
  }

  goToHome() {
    this.menuService.navigateHome();
  }
}

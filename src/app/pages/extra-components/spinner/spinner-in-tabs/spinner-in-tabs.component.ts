import { Component } from '@angular/core';
import { NbCardModule, NbTabsetModule, NbSpinnerModule } from '@nebular/theme';

@Component({
    selector: 'ngx-spinner-in-tabs',
    templateUrl: 'spinner-in-tabs.component.html',
    styleUrls: ['spinner-in-tabs.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbTabsetModule, NbSpinnerModule]
})

export class SpinnerInTabsComponent {

  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
  }
}

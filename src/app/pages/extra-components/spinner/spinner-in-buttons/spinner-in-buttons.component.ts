import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbCardModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';

@Component({
    selector: 'ngx-spinner-in-buttons',
    templateUrl: 'spinner-in-buttons.component.html',
    styleUrls: ['spinner-in-buttons.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbButtonModule, MatRippleModule, NbSpinnerModule]
})

export class SpinnerInButtonsComponent {

  loadingLargeGroup = false;
  loadingMediumGroup = false;

  toggleLoadingLargeGroupAnimation() {
    this.loadingLargeGroup = true;

    setTimeout(() => this.loadingLargeGroup = false, 3000);
  }

  toggleLoadingMediumGroupAnimation() {
    this.loadingMediumGroup = true;

    setTimeout(() => this.loadingMediumGroup = false, 3000);
  }
}

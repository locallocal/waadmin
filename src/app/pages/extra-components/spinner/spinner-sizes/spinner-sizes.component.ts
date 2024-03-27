import { Component } from '@angular/core';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';

@Component({
    selector: 'ngx-spinner-sizes',
    templateUrl: 'spinner-sizes.component.html',
    standalone: true,
    imports: [NbCardModule, NbSpinnerModule]
})

export class SpinnerSizesComponent {
}

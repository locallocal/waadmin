import { Component } from '@angular/core';
import { NbCardModule, NbSpinnerModule } from '@nebular/theme';

@Component({
    selector: 'ngx-spinner-color',
    templateUrl: 'spinner-color.component.html',
    standalone: true,
    imports: [NbCardModule, NbSpinnerModule]
})

export class SpinnerColorComponent {
}

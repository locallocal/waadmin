import { Component } from '@angular/core';
import { NbCardModule, NbAlertModule } from '@nebular/theme';

@Component({
    selector: 'ngx-alert',
    templateUrl: 'alert.component.html',
    standalone: true,
    imports: [NbCardModule, NbAlertModule]
})
export class AlertComponent {

}

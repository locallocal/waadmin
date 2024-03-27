import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbCardModule, NbButtonModule, NbTooltipModule } from '@nebular/theme';

@Component({
    selector: 'ngx-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbButtonModule, NbTooltipModule, MatRippleModule]
})
export class TooltipComponent {

}

import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbCardBodyComponent, NbCardComponent, NbCardFooterComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbTooltipComponent } from '../../../@theme/components/tooltip/tooltip.component';

@Component({
    selector: 'ngx-tooltip',
    templateUrl: 'tooltip.component.html',
    styleUrls: ['tooltip.component.scss'],
    standalone: true,
    imports: [
        NbCardComponent,
        NbCardHeaderComponent,
        NbCardBodyComponent,
        NbCardFooterComponent,
        NbButtonComponent,
        NbTooltipComponent,
        MatRippleModule,
    ]
})
export class TooltipComponent {

}

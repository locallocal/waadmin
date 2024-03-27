import { Component } from '@angular/core';
import { InteractiveProgressBarComponent } from './interactive-progress-bar/interactive-progress-bar.component';
import { NbCardModule, NbProgressBarModule } from '@nebular/theme';

@Component({
    selector: 'ngx-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['progress-bar.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbProgressBarModule, InteractiveProgressBarComponent]
})
export class ProgressBarComponent {

}

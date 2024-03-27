import { Component } from '@angular/core';
import { EchartsRadarComponent } from './echarts-radar.component';
import { EchartsBarAnimationComponent } from './echarts-bar-animation.component';
import { EchartsAreaStackComponent } from './echarts-area-stack.component';
import { EchartsMultipleXaxisComponent } from './echarts-multiple-xaxis.component';
import { EchartsLineComponent } from './echarts-line.component';
import { EchartsBarComponent } from './echarts-bar.component';
import { EchartsPieComponent } from './echarts-pie.component';
import { NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-echarts',
    styleUrls: ['./echarts.component.scss'],
    templateUrl: './echarts.component.html',
    standalone: true,
    imports: [NbCardModule, EchartsPieComponent, EchartsBarComponent, EchartsLineComponent, EchartsMultipleXaxisComponent, EchartsAreaStackComponent, EchartsBarAnimationComponent, EchartsRadarComponent]
})
export class EchartsComponent {}

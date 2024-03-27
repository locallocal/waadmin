import { Component } from '@angular/core';
import { ChartjsRadarComponent } from './chartjs-radar.component';
import { ChartjsBarHorizontalComponent } from './chartjs-bar-horizontal.component';
import { ChartjsMultipleXaxisComponent } from './chartjs-multiple-xaxis.component';
import { ChartjsLineComponent } from './chartjs-line.component';
import { ChartjsBarComponent } from './chartjs-bar.component';
import { ChartjsPieComponent } from './chartjs-pie.component';
import { NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-chartjs',
    styleUrls: ['./chartjs.component.scss'],
    templateUrl: './chartjs.component.html',
    standalone: true,
    imports: [NbCardModule, ChartjsPieComponent, ChartjsBarComponent, ChartjsLineComponent, ChartjsMultipleXaxisComponent, ChartjsBarHorizontalComponent, ChartjsRadarComponent]
})
export class ChartjsComponent {}

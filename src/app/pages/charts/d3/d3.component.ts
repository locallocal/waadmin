import { Component } from '@angular/core';
import { D3AreaStackComponent } from './d3-area-stack.component';
import { D3AdvancedPieComponent } from './d3-advanced-pie.component';
import { D3LineComponent } from './d3-line.component';
import { D3BarComponent } from './d3-bar.component';
import { D3PieComponent } from './d3-pie.component';
import { NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-d3',
    styleUrls: ['./d3.component.scss'],
    templateUrl: './d3.component.html',
    standalone: true,
    imports: [NbCardModule, D3PieComponent, D3BarComponent, D3LineComponent, D3AdvancedPieComponent, D3AreaStackComponent]
})
export class D3Component {}

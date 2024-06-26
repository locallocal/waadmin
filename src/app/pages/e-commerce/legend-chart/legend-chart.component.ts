import { Component, Input } from '@angular/core';

import { NgxLegendItemColor } from './enum.legend-item-color';
import { NgFor } from '@angular/common';

@Component({
    selector: 'ngx-legend-chart',
    styleUrls: ['./legend-chart.component.scss'],
    templateUrl: './legend-chart.component.html',
    standalone: true,
    imports: [NgFor]
})
export class ECommerceLegendChartComponent {

  /**
   * Take an array of legend items
   * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
   * @type {{iconColor: string; title: string}[]}
   */
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}

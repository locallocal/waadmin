import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'ngx-chart-panel-summary',
    styleUrls: ['./chart-panel-summary.component.scss'],
    template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,
    standalone: true,
    imports: [NgFor]
})
export class ChartPanelSummaryComponent {
  @Input() summary: {title: string; value: number}[];
}


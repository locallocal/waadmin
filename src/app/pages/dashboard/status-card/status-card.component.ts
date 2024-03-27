import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { NbCardComponent } from '../../../@theme/components/card/card.component';

@Component({
    selector: 'ngx-status-card',
    styleUrls: ['./status-card.component.scss'],
    template: `
    <nb-card matRipple (click)="on = !on" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
    standalone: true,
    imports: [
      NbCardComponent,
      CommonModule,
      NgClass,
      MatRippleModule,
    ]
})
export class StatusCardComponent {
  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
}

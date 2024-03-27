import { Component, Input } from '@angular/core';
import { NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-slide-out',
    styleUrls: ['./slide-out.component.scss'],
    templateUrl: './slide-out.component.html',
    standalone: true,
    imports: [NbIconModule]
})
export class SlideOutComponent {

  @Input() showVisitorsStatistics: boolean = false;

  toggleStatistics() {
    this.showVisitorsStatistics = !this.showVisitorsStatistics;
  }
}

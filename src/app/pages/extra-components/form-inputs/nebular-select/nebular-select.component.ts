import { Component } from '@angular/core';
import { NbCardModule, NbSelectModule, NbOptionModule } from '@nebular/theme';

@Component({
    selector: 'ngx-nebular-select',
    templateUrl: 'nebular-select.component.html',
    styleUrls: ['nebular-select.component.scss'],
    standalone: true,
    imports: [NbCardModule, NbSelectModule, NbOptionModule]
})
export class NebularSelectComponent {

  commonSelectedItem = '2';
  selectedItem;
}

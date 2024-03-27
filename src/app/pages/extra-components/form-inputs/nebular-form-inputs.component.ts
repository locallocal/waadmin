import { Component } from '@angular/core';
import { NebularSelectComponent } from './nebular-select/nebular-select.component';

@Component({
    selector: 'ngx-nebular-form-inputs',
    templateUrl: 'nebular-form-inputs.component.html',
    styleUrls: ['nebular-form-inputs.component.scss'],
    standalone: true,
    imports: [NebularSelectComponent]
})
export class NebularFormInputsComponent {

}

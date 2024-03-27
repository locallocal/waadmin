import { Component } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { NbCardModule, NbSearchModule } from '@nebular/theme';

@Component({
    selector: 'ngx-search-fields',
    templateUrl: 'search-fields.component.html',
    standalone: true,
    imports: [NbCardModule, NbSearchModule, MatRippleModule]
})
export class SearchComponent {
}

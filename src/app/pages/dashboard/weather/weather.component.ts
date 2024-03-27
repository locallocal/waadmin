import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-weather',
    styleUrls: ['./weather.component.scss'],
    templateUrl: './weather.component.html',
    standalone: true,
    imports: [NbCardModule, NbIconModule]
})

export class WeatherComponent {
}

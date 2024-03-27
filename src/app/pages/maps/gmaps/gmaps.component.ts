import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-gmaps',
    styleUrls: ['./gmaps.component.scss'],
    templateUrl: './gmaps.component.html',
    standalone: true,
    imports: [NbCardModule, GoogleMapsModule]
})
export class GmapsComponent {
  readonly position = { lat: 51.678418, lng: 7.809007 };
}

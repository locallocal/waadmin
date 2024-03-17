import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  standalone: true,
  selector: 'ngx-material-buttons',
  templateUrl: './material-buttons.component.html',
  styleUrls: ['./material-buttons.component.scss'],
  imports: [
    MatButtonToggleModule,
  ],
})
export class MaterialButtonsComponent {}

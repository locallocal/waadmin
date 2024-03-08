import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'components',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./components.component.css'],
  imports: [ RouterModule],
})
export class ComponentsComponent {

}

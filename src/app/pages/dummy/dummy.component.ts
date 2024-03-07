import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbButtonComponent } from '../../@theme/components/button/button.component';

@Component({
  standalone: true,
  selector: 'ngx-dummy',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  imports:[NbButtonComponent],
})
export class DummyComponent {

}

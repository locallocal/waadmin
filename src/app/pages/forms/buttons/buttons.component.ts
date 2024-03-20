import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbActionComponent, NbActionsComponent } from '../../../@theme/components/actions/actions.component';
import { NbUserComponent } from '../../../@theme/components/user/user.component';
import { NbIconComponent } from '../../../@theme/components/icon/icon.component';
import { NbThemeService } from '../../../@theme/services/theme.service';
import { NbComponentStatus } from '../../../@theme/components/component-status';
import { NbComponentSize } from '../../../@theme/components/component-size';
import { NbComponentShape } from '../../../@theme/components/component-shape';

@Component({
  standalone: true,
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbActionComponent,
    NbActionsComponent,
    NbUserComponent,
    NbIconComponent,
  ]
})
export class ButtonsComponent {
  public constructor(private readonly themeService: NbThemeService) {
    this.materialTheme$ = this.themeService.onThemeChange()
      .pipe(map(theme => {
        const themeName: string = theme?.name || '';
        return themeName.startsWith('material');
      }));
  }

  public readonly materialTheme$: Observable<boolean>;

  public readonly statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  public readonly shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  public readonly sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}

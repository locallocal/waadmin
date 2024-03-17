import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbSelectComponent } from '../../../@theme/components/select/select.component';
import { NbOptionComponent } from '../../../@theme/components/option/option.component';
import { NbCheckboxComponent } from '../../../@theme/components/checkbox/checkbox.component';
import { NbRadioGroupComponent } from '../../../@theme/components/radio/radio-group.component';
import { NbRadioComponent } from '../../../@theme/components/radio/radio.component';

@Component({
  standalone: true,
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
  imports: [
    NbCardComponent,
    NbCardHeaderComponent,
    NbCardBodyComponent,
    NbSelectComponent,
    NbOptionComponent,
    NbCheckboxComponent,
    NbRadioGroupComponent,
    NbRadioComponent,
  ]
})
export class FormInputsComponent implements OnInit {
  public constructor(private readonly themeService: NbThemeService) {
  }

  public materialTheme$: Observable<boolean>;
  public starRate: number = 2;
  public heartRate: number = 4;
  public radioGroupValue: string = 'This is value 2';
  public showMaterialInputs = false;

  ngOnInit() {
    this.materialTheme$ = this.themeService.onThemeChange()
    .pipe(tap(theme => {
      const themeName: string = theme?.name || '';
      this.showMaterialInputs = themeName.startsWith('material');
    }));
  }
}

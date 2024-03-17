import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbInputDirective } from '../../../@theme/components/input/input.directive';
import { NbFormFieldComponent } from '../../../@theme/components/form-field/form-field.component';
import { NbIconComponent } from '../../../@theme/components/icon/icon.component';
import { NbPrefixDirective } from '../../../@theme/components/form-field/prefix.directive';
import { NbSuffixDirective } from '../../../@theme/components/form-field/suffix.directive';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';

@Component({
  standalone: true,
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbInputDirective,
    NbFormFieldComponent,
    NbIconComponent,
    NbPrefixDirective,
    NbSuffixDirective,
    NbButtonComponent,
  ]
})
export class InputsComponent {
  showPassword: boolean = true;

  getInputType() {
    if (this.showPassword) {
      return 'text'
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}

import { Component, forwardRef } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbToastComponent } from '../../../@theme/components/toastr/toast.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbToastrContainerRegistry, NbToastrService } from '../../../@theme/components/toastr/toastr.service';
import { NbGlobalPhysicalPosition, NbPositionHelper } from '../../../@theme/components/cdk/overlay/position-helper';
import { NB_TOASTR_CONFIG } from '../../../@theme/components/toastr/toastr-config';
import { NbOverlayService } from '../../../@theme/components/cdk/overlay/overlay-service';
import { NbOverlay, NbOverlayPositionBuilder } from '../../../@theme/components/cdk/overlay/mapping';
import { NbPositionBuilderService } from '../../../@theme/components/cdk/overlay/overlay-position';
import { NbViewportRulerAdapter } from '../../../@theme/components/cdk/adapter/viewport-ruler-adapter';
import { NbLayoutRulerService } from '../../../@theme/services/ruler.service';
import { NbLayoutScrollService } from '../../../@theme/services/scroll.service';

@Component({
  standalone: true,
  selector: 'toastrs',
  templateUrl: './toastrs.component.html',
  styleUrls: ['./toastrs.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbToastComponent,
    NbButtonComponent,
  ],
  providers: [
    NbToastrService,
    NbToastrContainerRegistry,
    NbOverlayService,
    NbOverlay,
    NbPositionBuilderService,
    NbViewportRulerAdapter,
    NbLayoutRulerService,
    NbLayoutScrollService,
    NbOverlayPositionBuilder,
    NbPositionHelper,
    { provide: NB_TOASTR_CONFIG, useValue: {} },
  ]
})
export class ToastrsComponent {
  private index: number = 0;
  public positions = NbGlobalPhysicalPosition;

  constructor(private toastrService: NbToastrService) {}

  showToast0(position: NbGlobalPhysicalPosition, status: string) {
    this.index += 1;
    this.toastrService.show(status || 'Success', `Toast ${this.index}`, {position, status});
  }

}

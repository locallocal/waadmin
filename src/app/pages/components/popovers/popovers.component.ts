import { Component } from '@angular/core';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbPopoverDirective } from '../../../@theme/components/popover/popover.directive';
import { NbViewportRulerAdapter } from '../../../@theme/components/cdk/adapter/viewport-ruler-adapter';
import { NbLayoutRulerService } from '../../../@theme/services/ruler.service';
import { NbLayoutScrollService } from '../../../@theme/services/scroll.service';
import { NbOverlay, NbOverlayContainer, NbOverlayPositionBuilder } from '../../../@theme/components/cdk/overlay/mapping';
import { NbOverlayService } from '../../../@theme/components/cdk/overlay/overlay-service';

@Component({
  standalone: true,
  selector: 'popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbButtonComponent,
    NbPopoverDirective,
  ],
  providers: [
    NbViewportRulerAdapter,
    NbLayoutRulerService,
    NbLayoutScrollService,
    NbOverlayPositionBuilder,
    NbOverlayService,
    NbOverlay,
    NbOverlayContainer,
  ]
})
export class PopoversComponent {

}

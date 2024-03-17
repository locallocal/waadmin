import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbTooltipDirective } from '../../../@theme/components/tooltip/tooltip.directive';
import { NbPositionBuilderService } from '../../../@theme/components/cdk/overlay/overlay-position';
import { NbViewportRulerAdapter } from '../../../@theme/components/cdk/adapter/viewport-ruler-adapter';
import { NbLayoutRulerService } from '../../../@theme/services/ruler.service';
import { NbLayoutScrollService } from '../../../@theme/services/scroll.service';
import { NbOverlay, NbOverlayContainer, NbOverlayPositionBuilder } from '../../../@theme/components/cdk/overlay/mapping';
import { NbOverlayService } from '../../../@theme/components/cdk/overlay/overlay-service';

@Component({
  standalone: true,
  selector: 'tooltips',
  templateUrl: './tooltips.component.html',
  styleUrls: ['./tooltips.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbButtonComponent,
    NbTooltipDirective,
  ],
  providers: [
    NbPositionBuilderService,
    NbViewportRulerAdapter,
    NbLayoutRulerService,
    NbLayoutScrollService,
    NbOverlayPositionBuilder,
    NbOverlayService,
    NbOverlay,
    NbOverlayContainer,
  ]
})
export class TooltipsComponent {

}

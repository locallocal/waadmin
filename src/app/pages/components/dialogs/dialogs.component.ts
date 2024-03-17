import { Component } from '@angular/core';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';
import { NbDialogService } from '../../../@theme/components/dialog/dialog.service';
import { ShowcaseDialogComponent } from '../../modal-overlays/dialog/showcase-dialog/showcase-dialog.component';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbPositionBuilderService } from '../../../@theme/components/cdk/overlay/overlay-position';
import { NbViewportRulerAdapter } from '../../../@theme/components/cdk/adapter/viewport-ruler-adapter';
import { NbLayoutRulerService } from '../../../@theme/services/ruler.service';
import { NbLayoutScrollService } from '../../../@theme/services/scroll.service';
import { NbOverlay, NbOverlayPositionBuilder } from '../../../@theme/components/cdk/overlay/mapping';
import { NbOverlayService } from '../../../@theme/components/cdk/overlay/overlay-service';
import { NbFocusTrapFactoryService } from '../../../@theme/components/cdk/a11y/focus-trap';

@Component({
  standalone: true,
  selector: 'dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css'],
  providers: [
    NbDialogService,
    NbPositionBuilderService,
    NbViewportRulerAdapter,
    NbLayoutRulerService,
    NbLayoutScrollService,
    NbOverlayPositionBuilder,
    NbOverlayService,
    NbOverlay,
    NbFocusTrapFactoryService,
  ],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbButtonComponent,
  ]
})
export class DialogsComponent {
  constructor(private dialogSerivce:NbDialogService) {}

  open() {
    this.dialogSerivce.open(ShowcaseDialogComponent, {
      context: 'This is a title passed to the dialog component.'
    })
  }
}

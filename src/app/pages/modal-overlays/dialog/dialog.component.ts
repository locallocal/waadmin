import { Component, TemplateRef } from '@angular/core';
import { NbDialogService, NbCardModule, NbButtonModule } from '@nebular/theme';
import { ShowcaseDialogComponent } from './showcase-dialog/showcase-dialog.component';
import { DialogNamePromptComponent } from './dialog-name-prompt/dialog-name-prompt.component';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';

@Component({
    selector: 'ngx-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.scss'],
    standalone: true,
    imports: [
      NbCardComponent,
      NbCardHeaderComponent,
      NbCardBodyComponent,
      NbButtonComponent,
      MatRippleModule,
      CommonModule,
    ]
})
export class DialogComponent {

  names: string[] = [];

  constructor(private dialogService: NbDialogService) {}

  open() {
    this.dialogService.open(ShowcaseDialogComponent, {
      context: {
        title: 'This is a title passed to the dialog component',
      },
    });
  }

  open2(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  open3() {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(name => name && this.names.push(name));
  }

  openWithoutBackdrop(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        hasBackdrop: false,
      });
  }

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnBackdropClick: false,
      });
  }

  openWithoutEscClose(dialog: TemplateRef<any>) {
    this.dialogService.open(
      dialog,
      {
        context: 'this is some additional data passed to dialog',
        closeOnEsc: false,
      });
  }
}

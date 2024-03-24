import { Component, ViewChild } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent, NbCardHeaderComponent } from '../../../@theme/components/card/card.component';
import { NbAccordionComponent } from '../../../@theme/components/accordion/accordion.component';
import { NbAccordionItemComponent } from '../../../@theme/components/accordion/accordion-item.component';
import { NbAccordionItemHeaderComponent } from '../../../@theme/components/accordion/accordion-item-header.component';
import { NbAccordionItemBodyComponent } from '../../../@theme/components/accordion/accordion-item-body.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';

@Component({
  standalone: true,
  selector: 'ngx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbCardHeaderComponent,
    NbAccordionComponent,
    NbButtonComponent,
    NbAccordionItemComponent,
    NbAccordionItemHeaderComponent,
    NbAccordionItemBodyComponent,
  ]
})
export class AccordionComponent {

  @ViewChild('item', { static: true }) accordion;

  toggle() {
    this.accordion.toggle();
  }
}

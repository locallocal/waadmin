import { Component, ViewChild } from '@angular/core';
import { NbAccordionComponent } from '../../../@theme/components/accordion/accordion.component';
import { NbAccordionItemComponent } from '../../../@theme/components/accordion/accordion-item.component';
import { NbAccordionItemHeaderComponent } from '../../../@theme/components/accordion/accordion-item-header.component';
import { NbAccordionItemBodyComponent } from '../../../@theme/components/accordion/accordion-item-body.component';
import { CommonModule } from '@angular/common';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbButtonComponent } from '../../../@theme/components/button/button.component';

@Component({
  standalone: true,
  selector: 'accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.css'],
  imports: [
    CommonModule,
    NbAccordionComponent,
    NbAccordionItemComponent,
    NbAccordionItemHeaderComponent,
    NbAccordionItemBodyComponent,
    NbCardComponent,
    NbCardBodyComponent,
    NbButtonComponent,
  ],
})
export class AccordionsComponent {

  @ViewChild('item') accordion: NbAccordionItemComponent;

  toggle() {
    this.accordion.toggle();
  }
}

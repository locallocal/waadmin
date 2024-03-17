import { Component } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbTagComponent } from '../../../@theme/components/tag/tag.component';
import { NbTagListComponent } from '../../../@theme/components/tag/tag-list.component';
import { CommonModule } from '@angular/common';
import { NbTagInputAddEvent, NbTagInputDirective } from '../../../@theme/components/tag/tag-input.directive';

@Component({
  standalone: true,
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbTagComponent,
    NbTagListComponent,
    NbTagInputDirective,
    CommonModule,
  ]
})
export class TagsComponent {
  trees: string[] = [
    'Prometheus', 'Methuselah', 'Gran Abuelo',
    'Scofield Juniper', 'Panke Baobab', 'Jaya Sri Maha Bodhi'
  ]
  values: Set<string> = new Set(["hello"]);

  onTagRemove(tagToRemove: NbTagComponent) {
    this.trees= this.trees.filter(t => t !== tagToRemove.text);
  }

  onTagRemove1(tagToRemove: NbTagComponent) {
    this.values.delete(tagToRemove.text)
  }

  onTagAdd1({value, input} : NbTagInputAddEvent) {
    if (value) {
      this.values.add(value);
    }
    input.nativeElement.value = "";
  }
}

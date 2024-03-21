import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { NbCardBodyComponent, NbCardComponent } from '../../../@theme/components/card/card.component';
import { NbAutocompleteComponent } from '../../../@theme/components/autocomplete/autocomplete.component';
import { NbOptionComponent } from '../../../@theme/components/option/option.component';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NbAutocompleteDirective } from '../../../@theme/components/autocomplete/autocomplete.directive';
import { NbInputDirective } from '../../../@theme/components/input/input.directive';

@Component({
  standalone: true,
  selector: 'autocompletes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './autocompletes.component.html',
  styleUrls: ['./autocompletes.component.css'],
  imports: [
    NbCardComponent,
    NbCardBodyComponent,
    NbAutocompleteComponent,
    NbOptionComponent,
    NbAutocompleteDirective,
    NbInputDirective,
    CommonModule,
  ],
})
export class AutocompletesComponent implements OnInit{
  options: string[];
  filteredOptions$: Observable<string[]>;
  @ViewChild('autoInput') input;

  ngOnInit(): void {
    this.options = ['Option1', 'Option2', 'Option3', 'Option4', 'Option5'];
    this.filteredOptions$ = of(this.options);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilterOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString))
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilterOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilterOptions($event);
  }
}

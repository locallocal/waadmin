import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { NbCardModule } from '@nebular/theme';

@Component({
    selector: 'ngx-search-map',
    templateUrl: './search-map.component.html',
    standalone: true,
    imports: [NbCardModule, SearchComponent, MapComponent]
})
export class SearchMapComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}

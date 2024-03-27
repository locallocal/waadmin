import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbCardModule, NbTabsetModule, NbRadioModule } from '@nebular/theme';
import { Temperature, TemperatureHumidityData } from '../../../@core/data/temperature-humidity';
import { takeWhile } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { RoundPipe } from '../../../@theme/pipes/round.pipe';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { TemperatureDraggerComponent } from './temperature-dragger/temperature-dragger.component';

@Component({
    selector: 'ngx-temperature',
    styleUrls: ['./temperature.component.scss'],
    templateUrl: './temperature.component.html',
    standalone: true,
    imports: [NbCardModule, NbTabsetModule, TemperatureDraggerComponent, NgClass, NbRadioModule, FormsModule, MatRippleModule, RoundPipe]
})
export class TemperatureComponent implements OnDestroy {

  private alive = true;

  temperatureData: Temperature;
  temperature: number;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidityData: Temperature;
  humidity: number;
  humidityOff = false;
  humidityMode = 'heat';

  theme: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
              private temperatureHumidityService: TemperatureHumidityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(config => {
      this.theme = config.variables.temperature;
    });

    forkJoin(
      this.temperatureHumidityService.getTemperatureData(),
      this.temperatureHumidityService.getHumidityData(),
    )
      .subscribe(([temperatureData, humidityData]: [Temperature, Temperature]) => {
        this.temperatureData = temperatureData;
        this.temperature = this.temperatureData.value;

        this.humidityData = humidityData;
        this.humidity = this.humidityData.value;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}

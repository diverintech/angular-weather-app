import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from '../../../../models/interfaces/WeatherData.interface';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {

  @Input() weatherDataInput!: WeatherData;

  icons = {
    minTemp: faTemperatureLow,
    maxTemp: faTemperatureHigh,
    humidity: faDroplet,
    wind: faWind
  };

}

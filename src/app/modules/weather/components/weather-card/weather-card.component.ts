import { Component, Input } from '@angular/core';
import { WeatherData } from '../../../../models/interfaces/WeatherData.interface';
import {
  faDroplet,
  faSun,
  faTemperatureHigh,
  faTemperatureLow,
  faUmbrella,
  faWind
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {

  @Input() weatherDataInput!: WeatherData;
  @Input() currentUnit!: string;

  icons = {
    minTemp: faTemperatureLow,
    maxTemp: faTemperatureHigh,
    humidity: faDroplet,
    wind: faWind,
    rain: faUmbrella,
    sun: faSun
  };
}

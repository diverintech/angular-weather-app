import { Component, Input, OnChanges } from '@angular/core';
import { WeatherData } from '../../../../interfaces/weatherData.interface';
import {
  faDroplet,
  faSun,
  faTemperatureHigh,
  faTemperatureLow,
  faUmbrella,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnChanges {
  @Input() weatherDataInput!: WeatherData;
  @Input() currentUnit!: string;
  imagePath: string = '';
  imageDescription: string = '';

  icons = {
    minTemp: faTemperatureLow,
    maxTemp: faTemperatureHigh,
    humidity: faDroplet,
    wind: faWind,
    rain: faUmbrella,
    sun: faSun,
  };

  ngOnChanges() {
    if (this.weatherDataInput && this.currentUnit) {
      this.setImage(this.weatherDataInput.main.temp);
      console.log(this.weatherDataInput.main.temp);
    }
  }

  public setImage(temp: number) {
    if (this.currentUnit === 'C') {
      if (temp < 15) {
        this.imagePath = 'assets/cold1.jpg';
        this.imageDescription = 'WEATHER.COLD_WEATHER';
      } else if (temp >= 15 && temp < 25) {
        this.imagePath = 'assets/clouds.jpg';
        this.imageDescription = 'WEATHER.SUNNY_WEATHER';
      } else if (temp >= 25) {
        this.imagePath = 'assets/sun.jpg';
        this.imageDescription = 'WEATHER.SUNNY_WEATHER';
      }
    } else if (this.currentUnit === 'F') {
      const tempInCelsius = (temp - 32) * (5 / 9);
      if (tempInCelsius < 15) {
        this.imagePath = 'assets/cold1.jpg';
        this.imageDescription = 'WEATHER.COLD_WEATHER';
      } else if (tempInCelsius >= 15 && tempInCelsius < 25) {
        this.imagePath = 'assets/clouds.jpg';
        this.imageDescription = 'WEATHER.SUNNY_WEATHER';
      } else if (tempInCelsius >= 25) {
        this.imagePath = 'assets/sun.jpg';
        this.imageDescription = 'WEATHER.SUNNY_WEATHER';
      }
    }
  }
}

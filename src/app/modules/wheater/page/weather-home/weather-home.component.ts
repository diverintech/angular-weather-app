import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { error } from 'console';
import { WeatherData } from '../../../../models/interfaces/WeatherData.interface';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrl: './weather-home.component.scss'
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = 'Lisboa';
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (response) => {
          response && (this.weatherData == this.weatherData)
          console.log(this.weatherData)
        },
        error: (error) => console.log(error),
      })
  }
}

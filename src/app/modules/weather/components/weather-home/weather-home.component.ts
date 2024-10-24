import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../services/weather/weather.service';
import { WeatherData } from "../../../../interfaces/weatherData.interface";
import { TemperatureConverterService } from '../../services/conversions/temperature-converter.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.scss'],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Lisboa';
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;
  loading: boolean = false;
  currentUnit: string = 'C';

  constructor(private weatherService: WeatherService, private tempConverter: TemperatureConverterService) { }

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName);
  }

  getWeatherData(cityName: string): void {
    this.loading = true;
    this.weatherService
      .getWeatherData(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.weatherData = response;
          this.loading = false;
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
        },
      });
  }

  switchUnit(unit: string) {
    this.currentUnit = unit;
    if (unit === 'F') {
      this.weatherData.main.temp = this.tempConverter.convertToFahrenheit(this.weatherData.main.temp);
      this.weatherData.main.temp_min = this.tempConverter.convertToFahrenheit(this.weatherData.main.temp_min);
      this.weatherData.main.temp_max = this.tempConverter.convertToFahrenheit(this.weatherData.main.temp_max);
    } else {
      this.weatherData.main.temp = this.tempConverter.convertToCelsius(this.weatherData.main.temp);
      this.weatherData.main.temp_min = this.tempConverter.convertToCelsius(this.weatherData.main.temp_min);
      this.weatherData.main.temp_max = this.tempConverter.convertToCelsius(this.weatherData.main.temp_max);
    }
  }

  onSubmit(): void {
    this.getWeatherData(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

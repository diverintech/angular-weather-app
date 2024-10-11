// temperature-converter.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureConverterService {

  convertToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }

  convertToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
  }
}

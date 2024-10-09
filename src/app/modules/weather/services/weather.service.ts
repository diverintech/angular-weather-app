import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'bc70a6595d73fa45b34031c24116c9e6';

  constructor(private http: HttpClient) {
  }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,
      {})
  }
}



import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { environment } from '@env/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;
  const cityName = 'Lisboa';
  const mockApiKey = environment.weatherApiKey;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${mockApiKey}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [WeatherService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve weather data for a specific city from the API', () => {
    const mockWeatherData = {
      main: { temp: 20, pressure: 1013, humidity: 60 },
      weather: [{ description: 'clear sky', icon: '01d' }],
      name: 'Lisboa'
    };

    service.getWeatherData(cityName).subscribe((data) => {
      expect(data).toEqual(mockWeatherData);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockWeatherData);
  });
});

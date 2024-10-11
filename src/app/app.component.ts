import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherData } from './models/interfaces/WeatherData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "{{ 'WEATHER.WEATHER_APP' | translate }}";


  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('pt');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang && (browserLang.match(/en|pt/) ? browserLang : 'pt') || 'pt');
  }

  switchLanguage(target: EventTarget | null) {
    const selectElement = target as HTMLSelectElement;

    if (selectElement) {
      const selectedLanguage = selectElement.value;
      this.translateService.use(selectedLanguage);
    }
  }


}

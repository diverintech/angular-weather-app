import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "{{ 'WEATHER.WEATHER_APP' | translate }}";

  constructor(private translateService: TranslateService) {
    // Defina a língua padrão
    this.translateService.setDefaultLang('pt');

    // Obtenha a língua do navegador
    const browserLang = this.translateService.getBrowserLang();

    // Use uma verificação para evitar o erro de undefined
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

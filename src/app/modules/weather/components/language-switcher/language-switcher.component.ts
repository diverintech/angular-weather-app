import { Component, Output, EventEmitter } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {

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

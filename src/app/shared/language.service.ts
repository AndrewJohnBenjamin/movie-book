import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public currentlySelectedLanguage: Subject<string> = new Subject<string>();

  constructor(private translate: TranslateService) {
    this.currentlySelectedLanguage.next(this.getLanguageFromLocalStorage());
  }

  /**
   * A method that sets, and stores, the supplied language
   * @param language the language to set
   */
  public setLanguage = (language: string) => {
    window.localStorage.setItem('language', language);
    this.translate.setDefaultLang(language);
    this.currentlySelectedLanguage.next(language);
  }

  /**
   * A method that gets the currently selected language from local storage
   */
  public getLanguageFromLocalStorage = () => {
    if (window.localStorage.getItem('language')) {
      return window.localStorage.getItem('language');
    }

    return 'en';
  }
}

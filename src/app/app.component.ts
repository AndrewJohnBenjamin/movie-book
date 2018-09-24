import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from './client-services/language.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private languageSubscription: Subscription;
  public title = 'movie-book';
  public selectedLanguage;

  constructor(private languageService: LanguageService, private translateService: TranslateService) {
  }

  /**
   * A method that selects a given language
   * @param language the language that has been selected
   */
  public selectLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  /**
   * angular onDestroy lifecycle hook
   */
  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  /**
   * angular onInit lifecycle hook
   */
  ngOnInit(): void {
    const defaultLanguage = this.languageService.getLanguageFromLocalStorage();
    this.selectedLanguage = defaultLanguage;
    this.translateService.setDefaultLang(defaultLanguage);

    this.languageSubscription = this.languageService.currentlySelectedLanguage.subscribe(() => {
      window.location.reload();
    });
  }
}

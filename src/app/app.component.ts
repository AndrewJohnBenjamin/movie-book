import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from './shared/language.service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TmdbService } from './data-services/tmdb.service';
import { GenericSearchResults } from './models/GenericSearchResult';
import { MovieSearchResult } from './models/MovieSearchResult.model';
import { PersonSearchResult } from './models/PersonSearchResult.model';
import { TvShowSearchResult } from './models/TvShowSearchResult.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private languageSubscription: Subscription;
  private valueChangesSubscription: Subscription;
  public title = 'movie-book';
  public selectedLanguage;
  public searchResults = [];
  public search = new FormControl();

  constructor(
    private languageService: LanguageService,
    private translateService: TranslateService,
    private tmdbService: TmdbService,
    private router: Router) {
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
  public ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }

    if (this.valueChangesSubscription) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  /**
   * angular onInit lifecycle hook
   */
  public ngOnInit(): void {
    const defaultLanguage = this.languageService.getLanguageFromLocalStorage();
    this.selectedLanguage = defaultLanguage;
    this.translateService.setDefaultLang(defaultLanguage);

    this.languageSubscription = this.languageService.currentlySelectedLanguage.subscribe(() => {
      window.location.reload();
    });

    this.valueChangesSubscription = this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((searchText: string) => {
      if (searchText.length > 0) {
        this.executeSearch(searchText);
      } else {
        this.searchResults = [];
      }
    });
  }

  /**
   * A method that handles the event where a search item was selected by pressing the enter key
   */
  public onEnterPressedOnSearchItem() {
    this.router.navigateByUrl(`/${this.search.value.media_type}/${this.search.value.id}`);
  }

  /**
   * A method that returns the text for a currently selected search item
   * @param searchResult the currently selected search result
   */
  public getSearchDisplayText(searchResult: MovieSearchResult | PersonSearchResult | TvShowSearchResult) {
    if (!searchResult) {
      return;
    }

    return (<PersonSearchResult>searchResult).name ? (<PersonSearchResult>searchResult).name : (<MovieSearchResult>searchResult).title;
  }

  /**
   * A method that executes a search against the tmdb api for movies, tv shows and people
   * @param searchTerm the term to use to query the api with
   */
  private executeSearch(searchText: string) {
    this.tmdbService.executeSearch(searchText).toPromise().then((response: GenericSearchResults) => {
      this.searchResults = response.results;
    });
  }
}

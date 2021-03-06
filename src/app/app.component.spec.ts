import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './shared/language.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { TmdbService } from './data-services/tmdb.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const mockLanguageService = {
    getLanguageFromLocalStorage: jasmine.createSpy('getLanguageFromLocalStorage').and.returnValue('en'),
    setLanguage: jasmine.createSpy('setLanguage'),
    currentlySelectedLanguage: Observable.create()
  };

  const MockSyncPromise = function () {
    this.then = function (cb) {
      if (cb) {
        cb(mockSearchResults);
      }
    };
  };

  // const mockTranslateService = {
  //   setDefaultLang: jasmine.createSpy('setDefaultLang')
  // };

  const mockTmdbService = {
    executeSearch: jasmine.createSpy('executeSearch').and.returnValue({
      toPromise: () => {
        return new MockSyncPromise();
      }
    })
  };

  const mockSearchResults = {
    results: [{
      title: 'Terminator'
    }]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatAutocompleteModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        RouterModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MatToolbarModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: TmdbService, useValue: mockTmdbService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should call the language service to retrieve the language stored in local storage', () => {
      expect(mockLanguageService.getLanguageFromLocalStorage).toHaveBeenCalled();
    });

    it('should store the language to be used by the component', () => {
      expect(component.selectedLanguage).toEqual('en');
    });
  });

  describe('When a value has been entered into the search input', () => {
    describe('If that value is not an empty string', () => {
      it('should call the tmdb service to search for people, movies and tv shows using that string', fakeAsync(() => {
        const mockSearchValue = 'Terminator';
        component.search.setValue(mockSearchValue);
        tick(400);
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(mockTmdbService.executeSearch).toHaveBeenCalledWith(mockSearchValue);
        });
      }));

      it('should store the results of the search so they can be used by the component view', fakeAsync(() => {
        const mockSearchValue = 'Terminator';
        component.search.setValue(mockSearchValue);

        tick(400);
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(component.searchResults).toEqual(mockSearchResults.results);
        });
      }));
    });

    describe('If that value is an empty string', () => {
      it('should not call the tmdb service to search for people, movie and tv shows using that string', fakeAsync(() => {
        const mockSearchValue = '';
        mockTmdbService.executeSearch.calls.reset();
        component.search.setValue(mockSearchValue);

        tick(400);

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(mockTmdbService.executeSearch).not.toHaveBeenCalled();
        });
      }));
    });
  });

  describe('When the selectLanguage method is called', () => {
    it('Should call the setLanguage method on the language service', () => {
      const mockLanguage = 'en';
      component.selectLanguage(mockLanguage);
      expect(mockLanguageService.setLanguage).toHaveBeenCalledWith(mockLanguage);
    });
  });

  describe('When the getSearchDisplayText method is called', () => {
    describe('When the method is called with a tv show or person', () => {
      it('should return the name of that tv show of person', () => {
        const mockTvShowOrPerson = {
          name: 'Mock Tv Show Or Person Name'
        };

        expect(component.getSearchDisplayText(mockTvShowOrPerson)).toEqual('Mock Tv Show Or Person Name');
      });
    });

    describe('When the getSearchDisplayText method is called with a movie', () => {
      it('should return the title of that movie', () => {
        const mockMovie = {
          title: 'Mock movie Title'
        };

        expect(component.getSearchDisplayText(mockMovie)).toEqual('Mock movie Title');
      });
    });
  });
});

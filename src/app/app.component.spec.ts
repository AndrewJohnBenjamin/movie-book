import { TestBed, async, ComponentFixture, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LanguageService } from './shared/language.service';
import { TranslateService } from '@ngx-translate/core';
import { TmdbService } from './data-services/tmdb.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const mockLanguageService = {
    getLanguageFromLocalStorage: jasmine.createSpy().and.returnValue('en')
  };

  const mockTranslateService = {
    getLanguageFromLocalStorage: jasmine.createSpy()
  };

  const mockTmdbService = {
    executeSearch: jasmine.createSpy()
  };

  const mockRouterService = {
    navigateToUrl: jasmine.createSpy()
  };

  const mockSearchResults = [{
    title: 'Terminator'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: LanguageService, useValue: mockLanguageService },
        { provide: TranslateService, useValue: mockTranslateService },
        { provide: TmdbService, useValue: mockTmdbService },
        { provide: Router, useValue: mockRouterService }
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

    it('should store the langage to be used by the component', () => {
      expect(component.selectedLanguage).toEqual('en');
    });
  });

  describe('When a value has been entered into the search input', () => {
    describe('If that value is not an empty string', fakeAsync(() => {
      const mockSearchValue = 'Terminator';
      component.search.setValue(mockSearchValue);
      tick(400);

      it('should call the tmdb service to search for people, movies and tv shows using that string', () => {
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(mockTmdbService.executeSearch).toHaveBeenCalledWith(mockSearchValue);
        });
      });

      it('should store the results of the search so they can be used by the component view', () => {
        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(component.searchResults).toEqual(mockSearchResults);
        });
      });
    }));

    describe('If that value is an empty string', () => {
      it('should not call the tmdb service to search for people, movie and tv shows using that string', fakeAsync(() => {
        const mockSearchValue = '';
        component.search.setValue(mockSearchValue);

        tick(400);

        fixture.whenStable().then(() => {
          fixture.detectChanges();
          expect(mockTmdbService.executeSearch).not.toHaveBeenCalled();
        });
      }));
    });
  });

  describe('When the onEnterPressedOnSearchItem method is called', () => {
    it('should call the router service to navigate to the currently selected search item', () => {
      component.search.setValue({
        media_type: 'tv',
        id: 'mockTvShowId'
      });
      component.onEnterPressedOnSearchItem();
      expect(mockRouterService.navigateToUrl).toHaveBeenCalledWith('/tv/mockTvShowId');
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

    describe('When the method is called with a movie', () => {
      it('should return the title of that movie', () => {
        const mockMovie = {
          title: 'Mock movie Title'
        };

        expect(component.getSearchDisplayText(mockMovie)).toEqual('Mock movie Title');
      });
    });
  });
});

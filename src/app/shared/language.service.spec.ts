import { TestBed, getTestBed, async } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { TranslateService } from '@ngx-translate/core';

describe('Language Service Tests:', () => {
  let languageService: LanguageService;
  let injector: TestBed;

  const mockTranslateService = {
    setDefaultLang: jasmine.createSpy('setDefaultLang')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        LanguageService,
        { provide: TranslateService, useValue: mockTranslateService }
      ]
    });
    injector = getTestBed();
    languageService = injector.get(LanguageService);
  }));

  describe('when the setLanguage method is called', () => {
    it('should call the setDefaultLanguage method on the translate service', () => {
      spyOn(languageService.currentlySelectedLanguage, 'next');
      const mockLanguage = 'en';

      languageService.setLanguage(mockLanguage);
      expect(mockTranslateService.setDefaultLang).toHaveBeenCalledWith(mockLanguage);
    });

    it('should call store the currently selected language in the selected language observable', () => {
      spyOn(languageService.currentlySelectedLanguage, 'next');
      const mockLanguage = 'en';

      languageService.setLanguage(mockLanguage);
      expect(languageService.currentlySelectedLanguage.next).toHaveBeenCalledWith(mockLanguage);
    });
  });
});

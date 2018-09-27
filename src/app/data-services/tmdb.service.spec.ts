import { TmdbService } from './tmdb.service';
import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LanguageService } from '../shared/language.service';

describe('TmdbService Tests:', () => {
  let tmdbService: TmdbService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const mockLanguageService = {
    getLanguage: jasmine.createSpy().and.returnValue('en')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TmdbService,
        {
          provide: LanguageService,
          useValue: mockLanguageService
        }
      ]
    });
    injector = getTestBed();
    tmdbService = injector.get(TmdbService);
    httpMock = injector.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('When calling getLatestCinemaReleases', () => {
    it('Should make a GET request to \'movie/now_playing\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=5845d4c536f69b7de010345852498ec3&language=en';

      tmdbService.getLatestCinemaReleases().subscribe((response) => {
        expect(response).toEqual({});
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush({});
    });
  });

  describe('When calling getOnAirTvShows', () => {
    it('Should make a GET request to \'tv/on_the_air\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=5845d4c536f69b7de010345852498ec3&language=en&page=1';

      tmdbService.getOnAirTvShows().subscribe((response) => {
        expect(response).toEqual({});
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush({});
    });
  });
});

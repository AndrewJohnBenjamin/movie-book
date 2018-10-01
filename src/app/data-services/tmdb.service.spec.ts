import { TmdbService } from './tmdb.service';
import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LanguageService } from '../shared/language.service';
import { Movie } from '../models/Movie.model';
import { TvShow } from '../models/TvShow.model';
import { Person } from '../models/Person.model';
import { GenericSearchResults } from '../models/GenericSearchResult';

describe('TmdbService Tests:', () => {
  let tmdbService: TmdbService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const mockLanguageService = {
    getLanguage: jasmine.createSpy().and.returnValue('en'),
    getLanguageFromLocalStorage: jasmine.createSpy().and.returnValue('en')
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
      const latestCinemaReleases = [{
        title: 'Mock Cinema Release'
      }];

      tmdbService.getLatestCinemaReleases().subscribe((response) => {
        expect(response).toEqual(latestCinemaReleases);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(latestCinemaReleases);
    });
  });

  describe('When calling getOnAirTvShows', () => {
    it('Should make a GET request to \'tv/on_the_air\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=5845d4c536f69b7de010345852498ec3&language=en&page=1';
      const onAirTvShows = [{
        name: 'Mock On Air Tv Show'
      }];

      tmdbService.getOnAirTvShows().subscribe((response) => {
        expect(response).toEqual(onAirTvShows);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(onAirTvShows);
    });
  });

  describe('When calling getMovie with an append_to_response para', () => {
    it('Should make a GET request to the \'movie\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/movie/12345?api_key=5845d4c536f69b7de010345852498ec3&language=en&append_to_response=credits';
      const mockMovie = [{
        title: 'Mock Movie'
      }];

      tmdbService.getMovie('12345', 'credits').subscribe((response) => {
        expect(response).toEqual(<Movie>mockMovie);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockMovie);
    });
  });

  describe('When calling getTvShow with an append_to_response para', () => {
    it('Should make a GET request to the \'tv\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/tv/54321?api_key=5845d4c536f69b7de010345852498ec3&language=en&append_to_response=credits';
      const mockTvShow = [{
        name: 'Mock Tv Show'
      }];

      tmdbService.getTvShow('54321', 'credits').subscribe((response) => {
        expect(response).toEqual(<TvShow>mockTvShow);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockTvShow);
    });
  });

  describe('When calling getPerson with an append_to_response param', () => {
    it('Should make a GET request to the \'person\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/tv/56789?api_key=5845d4c536f69b7de010345852498ec3&language=en&append_to_response=movie_credits';
      const mockPerson = [{
        name: 'Mock Person'
      }];

      tmdbService.getTvShow('56789', 'movie_credits').subscribe((response) => {
        expect(response).toEqual(<Person>mockPerson);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockPerson);
    });
  });

  describe('When calling executeSearch', () => {
    it('Should make a GET request to the \'search/multiple\' endpoint', () => {
      const url = 'https://api.themoviedb.org/3/search/multi?api_key=5845d4c536f69b7de010345852498ec3&query=mockquery&language=en';
      const mockSearchResults = {
        results: [{
          name: 'Mock Person name',
          media_type: 'person'
        }, {
          title: 'Mock Movie Title',
          media_type: 'movie'
        }]
      };

      tmdbService.executeSearch('mockquery').subscribe((response) => {
        expect(response).toEqual(<GenericSearchResults>mockSearchResults);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockSearchResults);
    });
  });
});

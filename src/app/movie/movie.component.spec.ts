import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../shared/url.service';
import { Movie } from '../models/Movie.model';

describe('Movie Component Tests:', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  const mockMovie = {
    id: 1234,
    title: 'The Nun',
    poster_path: 'mock-poster-path.png',
    release_date: '2018-09-09',
    credits: {
      cast: []
    },
    reviews: {
      results: []
    }
  };

  const mockUrlService = {
    getCastMemberPhotoUrl: jasmine.createSpy(),
    getMoviePosterUrl: jasmine.createSpy()
  };
  
  const mockActivatedRoute = {
    snapshot: {
      data: {
        movie: mockMovie,
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: UrlService, useValue: mockUrlService }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should store the movie that the component makes use of', () => {
      expect(component.movie).toEqual(<Movie>mockMovie);
    });
  });

  describe('When calling the getCastMemberPhotoUrl method', () => {
    it('should make a call to the Url service to retrieve the url to the photo of that cast member', () => {
      const mockImageName = 'mock-profile-img.png';

      component.getCastMemberPhotoUrl(mockImageName);
      expect(mockUrlService.getCastMemberPhotoUrl).toHaveBeenCalledWith(mockImageName);
    });
  });

  describe('When calling the getMoviePosterUrl method method', () => {
    it('should make a call to the Url service to retrieve the url to the movie poster of the movie on the component', () => {
      component.getMoviePosterUrl();
      expect(mockUrlService.getMoviePosterUrl).toHaveBeenCalledWith(mockMovie.poster_path);
    });
  });
});

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TvShowComponent } from './tv-show.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../shared/url.service';

describe('Tv Show Component Tests:', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  const mockTvShow = {
    id: 'mockTvShowId',
    title: 'The Office',
    poster_path: 'mock-tv-show-poster-path.png'
  };

  const mockUrlService = {
    getCastMemberPhotoUrl: jasmine.createSpy(),
    getMoviePosterUrl: jasmine.createSpy()
  };
  
  const mockActivatedRoute = {
    snapshot: {
      data: {
        tvShow: mockTvShow,
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowComponent ],
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
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should store the tv show that the component makes use of', () => {
      expect(component.tvShow).toEqual(mockTvShow);
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
      component.getTvShowPosterUrl();
      expect(mockUrlService.getMoviePosterUrl).toHaveBeenCalledWith(mockTvShow.poster_path);
    });
  });
});

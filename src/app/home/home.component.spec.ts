import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent Tests:', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const moviesInTheatres = [{
    title: 'Star Wars'
  }];

  const onAirTvShows = [{
    name: 'Game of Thrones'
  }];

  const mockActivateRoute = {
    snapshot: {
      data: {
        moviesInTheatres: moviesInTheatres,
        onAirTvShows: onAirTvShows
      }
    }
  };

  const mockUrlService = {
    getHomePageItemUrl: jasmine.createSpy()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivateRoute }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should get a list of movies that are currently in the cinema and store them on the component', () => {
      expect(component.moviesInTheatres).toEqual(mockActivateRoute.snapshot.data.moviesInTheatres);
    });
    it('should get a list of movies that are currently on air and store them on the component', () => {
      expect(component.onAirTvShows).toEqual(mockActivateRoute.snapshot.data.onAirTvShows);
    });
  });

  describe('When the \'getPosterUrl\' method is called', () => {
    it('should call getTrendingItemImageUrl on the apiConfigService using the supplied movie poster_path value', () => {
      const mockPosterPath = '/mockPosterName.jpg';
      component.getPosterUrl(mockPosterPath);
      expect(mockUrlService.getHomePageItemUrl).toHaveBeenCalledWith(mockPosterPath);
    });
  });
});

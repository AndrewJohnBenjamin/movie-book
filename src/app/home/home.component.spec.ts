import { EntertainmentTileComponent } from './../shared/entertainment-tile/entertainment-tile.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';

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

  @Component({
    selector: 'app-enterainment-tile',
    template: '<p>Mock entertainment tile component</p>'
  })
  class MockEntertainmentTileComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, MockEntertainmentTileComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivateRoute },
        { provide: EntertainmentTileComponent, UseValue: MockEntertainmentTileComponent }
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
    it('should store a list of the first 3 movies that are showing in the cinemat', () => {
      expect(component.moviesInTheatres).toEqual(mockActivateRoute.snapshot.data.moviesInTheatres);
    });
    it('should store a list of the first 3 tv shows that are currently being shown', () => {
      expect(component.onAirTvShows).toEqual(mockActivateRoute.snapshot.data.onAirTvShows);
    });
  });
});

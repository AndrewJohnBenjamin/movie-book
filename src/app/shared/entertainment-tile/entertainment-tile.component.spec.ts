import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentTileComponent } from './entertainment-tile.component';
import { UrlService } from '../url.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('EntertainmentTileComponent', () => {
  let component: EntertainmentTileComponent;
  let fixture: ComponentFixture<EntertainmentTileComponent>;

  const mockUrlService = {
    getImageUrl: jasmine.createSpy('getImageUrl')
  };

  const mockOnAirTvShows = [{
    name: 'Mock Tv Show 1',
    overview: 'mockOverview'
  }, {
      name: 'Mock Tv Show 2',
      overview: 'mockOverview'
  }, {
      name: 'Mock Tv Show 3',
      overview: 'mockOverview'
  }];

  const mockMoviesInTheatres = [{
    name: 'Mock Movie 1',
    overview: 'mockOverview'
  }, {
      name: 'Mock Movie 2',
      overview: 'mockOverview'
  }, {
      name: 'Mock Movie 3',
      overview: 'mockOverview'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntertainmentTileComponent],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: UrlService, useValue: mockUrlService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentTileComponent);
    component = fixture.componentInstance;
    component.moviesInTheatres = mockMoviesInTheatres;
    component.tvShowsOnAir = mockOnAirTvShows;
    fixture.detectChanges();
  });

  describe('when the getImageUrl method is called', () => {
    it('should call the getImageUrl method on the urlService', () => {
      const mockImageFile = 'mockImageFileName.png';
      const mockImageSize = 'w128';

      component.getImageUrl(mockImageFile, mockImageSize);
      expect(mockUrlService.getImageUrl).toHaveBeenCalledWith(mockImageFile, mockImageSize);
    });
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentTileComponent } from './entertainment-tile.component';
import { UrlService } from '../url.service';

describe('EntertainmentTileComponent', () => {
  let component: EntertainmentTileComponent;
  let fixture: ComponentFixture<EntertainmentTileComponent>;

  const mockUrlService = {
    getImageUrl: jasmine.createSpy('getImageUrl')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntertainmentTileComponent],
      providers: [
        { provide: UrlService, useValue: mockUrlService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentTileComponent);
    component = fixture.componentInstance;
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

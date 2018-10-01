import { TestBed, getTestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UrlService } from './url.service';

describe('Url Service Tests:', () => {
  let urlService: UrlService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const mockBaseConfig = {
    images: {
      base_url: 'http://www.image-host.com/'
    },
    change_keys: []
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        UrlService
      ]
    });
    injector = getTestBed();
    urlService = injector.get(UrlService);
    urlService.apiConfig = mockBaseConfig;
    httpMock = injector.get(HttpTestingController);
  }));

  afterEach(() => {
    httpMock.verify();
  });

  describe('When the getBaseConfig method is called', () => {
    it('Should make a http call to retrieve the config object', () => {
      urlService.getBaseConfig().then(() => {
        expect(urlService.apiConfig).toBe(mockBaseConfig);
      });

      const req = httpMock.expectOne('https://api.themoviedb.org/3/configuration?api_key=5845d4c536f69b7de010345852498ec3');
      expect(req.request.method).toBe('GET');
      req.flush(mockBaseConfig);
    });
  });

  describe('When the getMoviePosterUrl method is called', () => {
    describe('When the method is called with a non empty string', () => {
      it('Should return the correct url for movie posters', () => {
        const mockMoviePosterFileName = 'mockMoviePosterFilename.png';
        expect(urlService.getMoviePosterUrl(mockMoviePosterFileName)).toEqual(`http://www.image-host.com/w185/${mockMoviePosterFileName}`);
      });
    });

    describe('When the method is called with an empty string', () => {
      it('Should return the default movie poster url', () => {
        expect(urlService.getMoviePosterUrl('')).toEqual('/assets/images/default-movie-tv-photo.png');
      });
    });
  });

  describe('When the getPersonProfileUrl method is called', () => {
    describe('When the method is called with a non empty string', () => {
      it('Should return the correct url for the persons profile', () => {
        const mockPersonsProfilePicFileName = 'mockPersonsProfilePicFileName.png';
        expect(urlService.getPersonProfileUrl(mockPersonsProfilePicFileName)).toEqual(`http://www.image-host.com/w185/${mockPersonsProfilePicFileName}`);
      });
    });

    describe('When the method is called with an empty string', () => {
      it('Should return the default person profile url', () => {
        expect(urlService.getPersonProfileUrl('')).toEqual('/assets/images/default-photo.png');
      });
    });
  });

  describe('When the getCastMemberPhotoUrl method is called', () => {
    describe('When the method is called with a non empty string', () => {
      it('Should return the correct url for cast members', () => {
        const mockCastMemberImageFilename = 'mockCastMemberImageFilename.png';
        expect(urlService.getCastMemberPhotoUrl(mockCastMemberImageFilename)).toEqual(`http://www.image-host.com/w138_and_h175_face/${mockCastMemberImageFilename}`);
      });
    });

    describe('When the method is called with an empty string', () => {
      it('Should return the default cast member image url', () => {
        expect(urlService.getCastMemberPhotoUrl('')).toEqual('/assets/images/default-photo.png');
      });
    });
  });

  describe('When the getImageUrl method is called', () => {
    it('Should return the correct url for the image and size', () => {
      const mockImageFileName = 'mockImageFile.png';
      const mockImageSize = 'w128';
      expect(urlService.getImageUrl(mockImageFileName, mockImageSize)).toEqual(`http://www.image-host.com/${mockImageSize}/${mockImageFileName}`);
    });
  });
});

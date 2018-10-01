import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PersonComponent } from './person.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../shared/url.service';

describe('Person Component Tests:', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  const mockPerson = {
    id: 'mockPersonId',
    name: 'Peter Parker',
    profile_path: 'mock-profile-path.png'
  };

  const mockUrlService = {
    getCastMemberPhotoUrl: jasmine.createSpy(),
    getPersonProfileUrl: jasmine.createSpy()
  };
  
  const mockActivatedRoute = {
    snapshot: {
      data: {
        person: mockPerson,
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent ],
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
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should store the person that this component makes use of', () => {
      expect(component.person).toEqual(mockPerson);
    });
  });

  describe('When the getProfileImageUrl method is called', () => {
    it('should make a call to the url service to get the profile image url for the person on the component', () => {
      component.getProfileImageUrl();
      expect(mockUrlService.getPersonProfileUrl).toHaveBeenCalledWith(mockPerson.profile_path);
    });
  });

  describe('When the getMoviePosterUrl method is called', () => {
    it('should make a call to the url service to get the url of the supplied small movie poster', () => {
      const mockMoviePosterFileName = 'mockMoviePosterFileName';

      component.getSmallMoviePosterUrl(mockMoviePosterFileName);
      expect(mockUrlService.getPersonProfileUrl).toHaveBeenCalledWith(mockMoviePosterFileName);
    });
  });
});

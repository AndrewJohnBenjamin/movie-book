import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DiscoverComponent } from './discover.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Discover Tests:', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverComponent ],
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('On initialisation of the component', () => {
    it('should do ......', () => {
      expect(component).toEqual('');
    });
  });
});

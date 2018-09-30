import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentTileComponent } from './entertainment-tile.component';

describe('EntertainmentTileComponent', () => {
  let component: EntertainmentTileComponent;
  let fixture: ComponentFixture<EntertainmentTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntertainmentTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntertainmentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

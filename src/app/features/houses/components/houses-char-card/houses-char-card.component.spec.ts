import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCharCardComponent } from './houses-char-card.component';

describe('HousesCharCardComponent', () => {
  let component: HousesCharCardComponent;
  let fixture: ComponentFixture<HousesCharCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesCharCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesCharCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

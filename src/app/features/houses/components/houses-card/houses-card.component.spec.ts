import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesCardComponent } from './houses-card.component';

describe('HousesCardComponent', () => {
  let component: HousesCardComponent;
  let fixture: ComponentFixture<HousesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

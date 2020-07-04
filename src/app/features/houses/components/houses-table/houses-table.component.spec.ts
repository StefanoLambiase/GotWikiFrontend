import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesTableComponent } from './houses-table.component';

describe('HousesTableComponent', () => {
  let component: HousesTableComponent;
  let fixture: ComponentFixture<HousesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTableComponent } from './locations-table.component';

describe('LocationsTableComponent', () => {
  let component: LocationsTableComponent;
  let fixture: ComponentFixture<LocationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

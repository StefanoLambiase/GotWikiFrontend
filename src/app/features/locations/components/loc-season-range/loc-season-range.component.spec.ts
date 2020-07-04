import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocSeasonRangeComponent } from './loc-season-range.component';

describe('LocSeasonRangeComponent', () => {
  let component: LocSeasonRangeComponent;
  let fixture: ComponentFixture<LocSeasonRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocSeasonRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocSeasonRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

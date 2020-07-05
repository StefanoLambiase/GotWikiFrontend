import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharSeasonRangeComponent } from './char-season-range.component';

describe('CharSeasonRangeComponent', () => {
  let component: CharSeasonRangeComponent;
  let fixture: ComponentFixture<CharSeasonRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharSeasonRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharSeasonRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

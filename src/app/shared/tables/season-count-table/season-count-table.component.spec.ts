import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCountTableComponent } from './season-count-table.component';

describe('SeasonCountTableComponent', () => {
  let component: SeasonCountTableComponent;
  let fixture: ComponentFixture<SeasonCountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonCountTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonCountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

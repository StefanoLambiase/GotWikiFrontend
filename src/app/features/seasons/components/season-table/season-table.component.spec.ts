import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTableComponent } from './season-table.component';

describe('SeasonTableComponent', () => {
  let component: SeasonTableComponent;
  let fixture: ComponentFixture<SeasonTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

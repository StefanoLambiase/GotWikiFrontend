import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSeriesChartComponent } from './multiple-series-chart.component';

describe('MultipleSeriesChartComponent', () => {
  let component: MultipleSeriesChartComponent;
  let fixture: ComponentFixture<MultipleSeriesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSeriesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSeriesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesScoreGraphComponent } from './episodes-score-graph.component';

describe('EpisodesScoreGraphComponent', () => {
  let component: EpisodesScoreGraphComponent;
  let fixture: ComponentFixture<EpisodesScoreGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodesScoreGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesScoreGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

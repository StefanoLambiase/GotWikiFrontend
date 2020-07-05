import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGraphComponent } from './character-graph.component';

describe('CharacterGraphComponent', () => {
  let component: CharacterGraphComponent;
  let fixture: ComponentFixture<CharacterGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

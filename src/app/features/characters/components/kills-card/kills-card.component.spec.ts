import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillsCardComponent } from './kills-card.component';

describe('KillsCardComponent', () => {
  let component: KillsCardComponent;
  let fixture: ComponentFixture<KillsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

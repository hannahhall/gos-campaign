import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativeCardComponent } from './initiative-card.component';

describe('InitiativeCardComponent', () => {
  let component: InitiativeCardComponent;
  let fixture: ComponentFixture<InitiativeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiativeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

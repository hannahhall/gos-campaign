import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightCardComponent } from './fight-card.component';

describe('FightCardComponent', () => {
  let component: FightCardComponent;
  let fixture: ComponentFixture<FightCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

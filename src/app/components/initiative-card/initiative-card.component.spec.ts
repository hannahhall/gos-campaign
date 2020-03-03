import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InitiativeCardComponent } from './initiative-card.component';
import { Npc } from 'src/app/class/npc/npc';

describe('InitiativeCardComponent', () => {
  let component: InitiativeCardComponent;
  let fixture: ComponentFixture<InitiativeCardComponent>;
  let mockNpc = new Npc({
    id: 1,
    name: 'Larry'
});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ InitiativeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativeCardComponent);
    component = fixture.componentInstance;
    component.character = mockNpc;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

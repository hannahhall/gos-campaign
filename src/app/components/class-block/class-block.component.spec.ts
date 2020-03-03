import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBlockComponent } from './class-block.component';
import { NpcClass } from 'src/app/class/npc-class/npc-class';
import { SpellSlot } from 'src/app/class/spell-slot/spell-slot';

describe('ClassBlockComponent', () => {
  let component: ClassBlockComponent;
  let fixture: ComponentFixture<ClassBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBlockComponent);
    component = fixture.componentInstance;
    component.klass = new NpcClass({});
    component.spellSlots = [new SpellSlot({})];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

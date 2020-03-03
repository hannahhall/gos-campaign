import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { NpcComponent } from './npc.component';
import { HeroComponent } from '../hero/hero.component';
import { ClassBlockComponent } from '../class-block/class-block.component';
import { of } from 'rxjs';
import { Npc } from 'src/app/class/npc/npc';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('NpcComponent', () => {
  let component: NpcComponent;
  let fixture: ComponentFixture<NpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule ],
      providers: [{
        provide: HttpClient,
        useValue: {
          get: jasmine.createSpy().and.returnValue(of([new Npc({})]))
        }
      }],
      declarations: [
        NpcComponent,
        MockComponent(HeroComponent),
        MockComponent(ClassBlockComponent),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MockComponent } from 'ng-mocks';

import { FightComponent } from './fight.component';
import { ModalComponent } from '../modal/modal.component';
import { HeroComponent } from '../hero/hero.component';
import { InitiativeCardComponent } from '../initiative-card/initiative-card.component';
import { FightCardComponent } from '../fight-card/fight-card.component';
import { FightService } from 'src/app/services/fight/fight.service';
import { MonsterService } from 'src/app/services/monster/monster.service';
import { UserService } from 'src/app/services/user/user.service';

describe('FightComponent', () => {
  let component: FightComponent;
  let fixture: ComponentFixture<FightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [
        MonsterService,
        UserService,
        FightService,
      ],
      declarations: [ 
        FightComponent,
        MockComponent(ModalComponent),
        MockComponent(HeroComponent),
        MockComponent(InitiativeCardComponent),
        MockComponent(FightCardComponent),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

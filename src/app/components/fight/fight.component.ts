import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/class/monster/monster';
import { MonsterService } from 'src/app/services/monster/monster.service';
import { FightService } from 'src/app/services/fight/fight.service';
import { Fight } from 'src/app/class/fight/fight';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {
  initiativeCards = [];
  fightCards = [];
  isModalVisible: Boolean = false;
  monsters: Monster[];
  chosenCharacter: number;
  fight = new Fight({name: 'First Encounter', challengeRating: 0});

  constructor(private monsterService: MonsterService, private fightService: FightService) { }

  ngOnInit() {
    this.monsterService.monsters.subscribe(monsters => {
      this.monsters = monsters;
    });

    this.monsterService.monster.subscribe(monster => {
      if (monster.id) {
        this.fight.challengeRating += monster.npcClass.challenge;
        this.initiativeCards.push(monster);
      }
    });
  }

  chooseCharacter() {
    this.monsterService.setMonster(this.chosenCharacter);
    this.isModalVisible = false;
  }

  startFight() {
    this.fight.members = this.initiativeCards.sort((a: Monster, b: Monster) => b.initiative - a.initiative);
  }

  createFight() {
    this.startFight();
    console.log(this.fightService)
    this.fightService.createFight(this.fight);
  }
}

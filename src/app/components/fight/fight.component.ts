import { Component, OnInit } from '@angular/core';
import { Npc } from 'src/app/class/npc/npc';
import { NpcService } from 'src/app/services/npc/npc.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit {
  initiativeCards = [];
  fightCards = [];
  isModalVisible: Boolean = false;
  npcs: Npc[];
  chosenCharacter: number;

  constructor(private npcService: NpcService) { }

  ngOnInit() {
    this.npcService.npcs.subscribe(npcs => {
      this.npcs = npcs;
    });

    this.npcService.npc.subscribe(npc => {
      if (npc.id) {
        this.initiativeCards.push(npc);
      }
    });
  }

  chooseCharacter() {
    this.npcService.setNpc(this.chosenCharacter);
    this.isModalVisible = false;
  }

  startFight() {
    this.fightCards = this.initiativeCards.sort((a: Npc, b: Npc) => b.initiative - a.initiative);
  }

}

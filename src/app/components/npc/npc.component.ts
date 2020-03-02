import { Component, OnInit } from '@angular/core';
import { NpcService } from 'src/app/services/npc/npc.service';
import { Npc } from 'src/app/class/npc/npc';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {
  npc: Npc;
  viewClass: boolean = true;
  viewCharacter: boolean = false;

  constructor(
    private npcService: NpcService
  ) { }

  ngOnInit() {
    this.npcService.npc.subscribe((npc: Npc) => {
      this.npc = npc;
    });
  }

  toggleClass() {
    this.viewClass = true;
    this.viewCharacter = false;
  }

  toggleCharacter() {
    this.viewClass = false;
    this.viewCharacter = true;
  }

}

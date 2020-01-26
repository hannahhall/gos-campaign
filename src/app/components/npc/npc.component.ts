import { Component, OnInit } from '@angular/core';
import { NpcService } from 'src/app/services/npc/npc.service';
import { timingSafeEqual } from 'crypto';
import { Npc } from 'src/app/class/npc/npc';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {
  npc: Npc;

  constructor(
    private npcService: NpcService
  ) { }

  ngOnInit() {
    this.npcService.npc.subscribe((npc: Npc) => {
      this.npc = npc
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Npc } from 'src/app/class/npc/npc';

@Component({
  selector: 'app-initiative-card',
  templateUrl: './initiative-card.component.html',
  styleUrls: ['./initiative-card.component.scss']
})
export class InitiativeCardComponent implements OnInit {
  @Input() character: Npc;

  constructor() { }

  ngOnInit() {
  }

}

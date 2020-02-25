import { Component, OnInit, Input } from '@angular/core';
import { Npc } from 'src/app/class/npc/npc';

@Component({
  selector: 'app-fight-card',
  templateUrl: './fight-card.component.html',
  styleUrls: ['./fight-card.component.scss']
})
export class FightCardComponent implements OnInit {
  @Input() character: Npc;

  constructor() { }

  ngOnInit() {
  }

}

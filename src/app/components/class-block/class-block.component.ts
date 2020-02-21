import { Component, OnInit, Input } from '@angular/core';
import { NpcClass } from 'src/app/class/npc-class/npc-class';
import { SpellSlot } from 'src/app/class/spell-slot/spell-slot';

@Component({
  selector: 'app-class-block',
  templateUrl: './class-block.component.html',
  styleUrls: ['./class-block.component.scss'],
})
export class ClassBlockComponent implements OnInit {
  @Input() klass: NpcClass;
  @Input() spellSlots: SpellSlot[];

  constructor() { }

  ngOnInit() {
    console.log(this.spellSlots);
  }
}

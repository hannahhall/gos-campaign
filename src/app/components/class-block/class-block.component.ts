import { Component, OnInit, Input } from '@angular/core';
import { NpcClass } from 'src/app/class/npc-class/npc-class';

@Component({
  selector: 'app-class-block',
  templateUrl: './class-block.component.html',
  styleUrls: ['./class-block.component.scss'],
})
export class ClassBlockComponent implements OnInit {
  @Input() klass: NpcClass;

  constructor() { }

  ngOnInit() {
    console.log(this.klass)
  }

}

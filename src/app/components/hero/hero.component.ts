import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle?: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  openMenu() {
    this.menuService.setOpenMenu(true);
  }

}

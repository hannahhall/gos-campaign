import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/class/user/user';
import { SpellService } from 'src/app/services/spell/spell.service';
import { Spell } from 'src/app/class/spell/spell';
import { Npc } from 'src/app/class/npc/npc';
import { NpcService } from 'src/app/services/npc/npc.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  blogs: any = {};
  hideBlogs: boolean = true;
  showType: any = {};
  user: User;
  spells: Spell[];
  npcs: Npc[];

  constructor(
    private blogService: BlogService,
    private router: Router,
    private userService: UserService,
    private spellService: SpellService,
    private npcService: NpcService,
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(res => {
      this.user = res;
    });

    this.blogService.blogs.subscribe(res => {
      res.forEach(blog => {
        const type = blog.type;
        if (!this.blogs[type]) {
          this.blogs[type] = []
        } 
        this.blogs[type].push(blog);
        this.showType[type] = false;
      });
    });

    this.spellService.spells.subscribe(res => {
      this.spells = res;
      this.showType.spells = false;
    });

    this.npcService.npcs.subscribe(res => {
      this.npcs = res;
      this.showType.npcs = false;
    });
  }

  toggleSection(type) {
    this.showType[type] = !this.showType[type];
  }

  isShown(type) {
    return this.showType[type];
  }

  goToBlog(id: number) {
    this.blogService.setBlog(id);
    this.router.navigate(['blogs', id])
  }

  goToSpell(id: number) {
    this.spellService.setSpell(id);
    this.router.navigate(['spells', id]);
  }

  goToNpc(id:number) {
    this.npcService.setNpc(id);
    this.router.navigate(['npc', id])
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { SpellComponent } from './components/spell/spell.component';
import { NpcComponent } from './components/npc/npc.component';
import { FightComponent } from './components/fight/fight.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blogs/:id',
    component: BlogComponent
  },
  {
    path: 'spells/:id',
    component: SpellComponent
  },
  {
    path: 'npc/:id',
    component: NpcComponent
  },
  {
    path: 'initiative',
    component: FightComponent
  },
  {
    path: '',
    redirectTo: 'blogs/3',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

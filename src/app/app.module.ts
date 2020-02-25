import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user/user.service';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { BlogComponent } from './components/blog/blog.component';
import { SpellComponent } from './components/spell/spell.component';
import { NpcComponent } from './components/npc/npc.component';
import { ClassBlockComponent } from './components/class-block/class-block.component';
import { FightComponent } from './components/fight/fight.component';
import { InitiativeCardComponent } from './components/initiative-card/initiative-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { FightCardComponent } from './components/fight-card/fight-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavComponent,
    HeroComponent,
    BlogComponent,
    SpellComponent,
    NpcComponent,
    ClassBlockComponent,
    FightComponent,
    InitiativeCardComponent,
    ModalComponent,
    FightCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [UserService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

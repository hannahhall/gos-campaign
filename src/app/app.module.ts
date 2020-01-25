import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { BlogComponent } from './components/blog/blog.component';
import { SpellComponent } from './components/spell/spell.component';
import { NpcComponent } from './components/npc/npc.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavComponent,
    HeroComponent,
    BlogComponent,
    SpellComponent,
    NpcComponent,
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

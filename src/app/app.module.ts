import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [HomeComponent]
})
export class AppModule { }

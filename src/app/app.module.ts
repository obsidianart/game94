import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component'
import { GameComponent } from './game/game.component'
import { AppComponent } from './app.component'
import { GameService }from './game.service'

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'game',
        component: GameComponent
      }
    ])
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
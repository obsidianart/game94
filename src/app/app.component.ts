import { Component } from '@angular/core'
import { GameService }from './game.service'
import { Level } from './level'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	level:Level

	constructor(private gameService:GameService) {
		gameService.getLevel().then(level=>this.level=level)
	}

	addWord(form){
		console.log("adding word", form.value.guess)
	}
}

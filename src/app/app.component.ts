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
	levelName:string

	constructor(private gameService:GameService) {
		this.levelName = 'fruits'
		gameService.getLevel(this.levelName).then(level=>this.level=level)
	}

	addWord(form){
		this.gameService
			.isAnswerForLevel(form.value.guess, this.levelName)
			.then(
				(answer)=>{console.log("yes")},
				(answer)=>{console.log("no")}
			)
			.catch((err)=>{console.log(err)})

		console.log("adding word", form.value.guess)
	}
}

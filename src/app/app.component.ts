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
	guesses:string[]

	constructor(private gameService:GameService) {
		this.startLevel('fruits')
		gameService.getLevel(this.levelName).then(level=>this.level=level)
	}

	startLevel(levelName:string){
		this.levelName = levelName
		this.guesses = []
	}

	addWord(word){
		if (!this.guesses.some(guess=>guess==word)){
			this.guesses.push(word)	
		}
	}

	checkWord(form){
		let word = form.value.guess

		this.gameService
			.isAnswerForLevel(word, this.levelName)
			.then(
				(answer)=>{this.addWord(word)},
				(answer)=>{console.log("no")}
			)
			.catch((err)=>{console.log(err)})
	}
}

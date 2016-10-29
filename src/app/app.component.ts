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
	isWinner: boolean
	levelName:string
	guesses:string[]

	constructor(private gameService:GameService) {
		this.startLevel('fruits')
		gameService.getLevel(this.levelName).then(level=>this.level=level)
	}

	startLevel(levelName:string){
		this.levelName = levelName
		this.guesses = []
		this.isWinner = false
	}

	nextLevel(){

	}

	checkWin(){
		this.isWinner = this.level.answersLength === this.guesses.length
	}

	addWord(word){
		if (!this.guesses.some(guess=>guess==word)){
			this.guesses.push(word)	
		}
		this.checkWin()
	}

	checkWord(form){
		let word = form.value.guess
		form.reset()

		this.gameService
			.isAnswerForLevel(word, this.levelName)
			.then(
				(answer)=>{this.addWord(word)},
				(answer)=>{console.log("no")}
			)
			.catch((err)=>{console.log(err)})
	}
}

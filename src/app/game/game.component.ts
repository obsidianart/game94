import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { GameService }from '../game.service'
import { Level } from '../level'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	level:Level
	isWinner: boolean
	levelName:string
	guesses:any[]

	constructor(private gameService:GameService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			this.startLevel(params['levelName'])
		});
	}

	startLevel(levelName:string){
		this.levelName = levelName
		this.guesses = []
		this.isWinner = false
		this.level = undefined

		this.gameService
			.getLevel(this.levelName)
			.then(level=>{this.level=level})
	}

	nextLevel(){
		this.startLevel(this.level.next)
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
				(answer)=>{this.addWord(answer)},
				(answer)=>{console.log("no")}
			)
			.catch((err)=>{console.log(err)})
	}


}

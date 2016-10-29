import { Injectable } from '@angular/core';
import { Level } from './level'

@Injectable()
export class GameService {
	levels = {
		fruits: <Level>{
			title: 'Fruits',
			answers: ['banana', 'apple']
		},
		vegetables: <Level>{
			title: 'Vegetables',
			answers: ['cucumber', 'leek']
		},
		birds: <Level>{
			title: 'Birds',
			answers: ['pidgeon', 'robin']
		}
	}

	constructor() { }

	getLevel():Promise<Level> {
		return new Promise(resolve=>{
			setTimeout(()=>resolve(this.levels.fruits), 1000)
		})
	}

	isAnswerForLevel(_answer:string):Promise<Boolean> {
		return new Promise((resolve,reject)=>{
			let answer = this.levels.fruits.answers.find(ans=>ans.toLowerCase()==_answer.toLowerCase())
			answer?resolve(answer):reject(_answer)
		})
	}

}

import { Injectable } from '@angular/core';
import { Level } from './level'

@Injectable()
export class GameService {
	levels = {
		level0: <Level>{
			title: 'Fruits',
			answers: ['banana', 'apple']
		},
		level1: <Level>{
			title: 'Vegetables',
			answers: ['cucumber', 'leek']
		}
	}

	constructor() { }

	getLevel():Promise<Level> {
		return new Promise(resolve=>{
			setTimeout(()=>resolve(this.levels.level0), 1000)
		})
	}

	isAnswerForLevel(_answer:string):Promise<Boolean> {
		return new Promise((resolve,reject)=>{
			let answer = this.levels.level0.answers.find(ans=>ans.toLowerCase()==_answer.toLowerCase())
			answer?resolve(answer):reject(_answer)
		})
	}

}

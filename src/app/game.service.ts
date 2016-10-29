import { Injectable } from '@angular/core';
import { Level } from './level'

@Injectable()
export class GameService {
	level:Level = {
		title: 'Fruits',
		answers: ['banana', 'apple']
	}

	constructor() { }

	getLevel():Promise<Level> {
		return new Promise(resolve=>{
			setTimeout(()=>resolve(this.level), 1000)
		})
	}

	isAnswerForLevel(_answer:string):Promise<Boolean> {
		return new Promise((resolve,reject)=>{
			let answer = this.level.answers.find(ans=>ans.toLowerCase()==_answer.toLowerCase())
			answer?resolve(answer):reject(_answer)
		})
	}

}

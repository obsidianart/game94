import { Injectable } from '@angular/core';
import { Level } from './level'

@Injectable()
export class GameService {
	levels = {
		fruits:{
			title: 'Fruits',
			answers: ['banana', 'apple']
		},
		vegetables:{
			title: 'Vegetables',
			answers: ['cucumber', 'leek']
		},
		birds:{
			title: 'Birds',
			answers: ['pidgeon', 'robin']
		}
	}

	private mapLevel(level:Level):Object{
		return {
			title:level.title,
			answers:[],
			answersLength:level.answers.length
		}
	}

	getLevel(levelName:string):Promise<Level> {
		return new Promise(resolve=>{
			setTimeout(()=>resolve(this.mapLevel(this.levels[levelName])), 300)
		})
	}

	isAnswerForLevel(_answer:string, levelName:string):Promise<Boolean> {
		return new Promise((resolve,reject)=>{
			let answer = this.levels[levelName].answers.find(ans=>ans.toLowerCase()==_answer.toLowerCase())
			answer?resolve(answer):reject(_answer)
		})
	}

}

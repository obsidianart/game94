import { Injectable } from '@angular/core';
import { Level } from './level'

@Injectable()
export class GameService {
	levels = {
		fruits:{
			title: 'Fruits',
			answers: [
				{word:'banana',percentage:60},
				{word:'apple' ,percentage:34},
			],
			next: 'vegetables',
		},
		vegetables:{
			title: 'Vegetables',
			answers: [
				{word:'cucumber',percentage:50},
				{word:'leek'    ,percentage:44},
			],
			next: 'birds',
		},
		birds:{
			title: 'Birds',
			answers: [
				{word:'pigeon',percentage:31},
				{word:'robin' ,percentage:53},
			],
			next: '',
		}
	}

	private mapLevel(level:Level):Level{
		return {
			title:level.title,
			answers:[],
			answersLength:level.answers.length,
			next:level.next
		}
	}

	getLevel(levelName:string):Promise<Level> {
		return new Promise(resolve=>{
			setTimeout(()=>resolve(this.mapLevel(this.levels[levelName])), 300)
		})
	}

	isAnswerForLevel(_answer:string, levelName:string):Promise<Boolean> {
		return new Promise((resolve,reject)=>{
			let answer = this.levels[levelName].answers.find(ans=>ans.word.toLowerCase()==_answer.toLowerCase())
			answer?resolve(answer):reject(_answer)
		})
	}

}

import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Level } from './level'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class GameService {
	private URL:string = 'http://www.obsidianart.com/projects/game94/'

	constructor(private http:Http) {}

	private mapLevel(level:Level):Level{
		return {
			title:level.title,
			answers:[],
			answersLength:level.answers.length,
			next:level.next
		}
	}

	private _getLevel(levelName):Promise<Level> {
		return new Promise((resolve, reject)=>{
			var t = this
			var req = this.http
						  .get(this.URL)
						  .map(res => res.json())
						  .catch(err => err)

			req.subscribe(
				levels=>{
					if (levelName in levels){
						resolve(levels[levelName])
					} else {
						reject("level doesn't exist")
					}
				},
				err=> {
					console.warn(err)
				}
			)
		})
	}

	getLevel(levelName):Promise<Level> {
		return new Promise((resolve, reject)=>{
			this._getLevel(levelName)
			    .then(level=>resolve(this.mapLevel(level)))
			    .catch(reject)
		})
	}

	isAnswerForLevel(_answer:string, levelName:string):Promise<Boolean> {
		return new Promise((resolve,reject)=>{
			this._getLevel(levelName)
			    .then(levels=>{
					let answer = levels.answers.find(ans=>ans.word.toLowerCase()==_answer.toLowerCase())
					answer?resolve(answer):reject(_answer)
				})
		})
	}

}

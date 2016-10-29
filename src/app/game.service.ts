import { Injectable } from '@angular/core';
import { Level } from './level'

@Injectable()
export class GameService {
	level:Level = {
		title: 'Fruits',
		answers: ['banana', 'apple']
	}

	constructor() { }

	getLevel():Level {
		return this.level
	}

}

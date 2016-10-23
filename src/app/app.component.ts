import { Component } from '@angular/core'
import { Level } from './level'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	level:Level = {
		title: 'Fruits',
		answers: ['banana', 'apple']
	}

	addWord(form){
		console.log("adding word", form)
	}
}

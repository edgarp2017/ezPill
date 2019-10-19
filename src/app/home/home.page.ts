import { Component } from '@angular/core';
//import './addMeds';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	constructor() {}

	static counter = 0;

//console.log("in AddMeds.ts");

	linkToAddMedsPage() {
		
		if(HomePage.counter%2==0){
			document.getElementById("addMedsHome").innerHTML = "Hello World";
		}else{
			document.getElementById("addMedsHome").innerHTML = "Click me";
		}
		HomePage.counter++;

	}
}





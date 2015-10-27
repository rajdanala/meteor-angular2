/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component,NgFor, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: 'app'
})
@View({
	templateUrl: 'client/app.html',
	directives: [NgFor]
})
class MeteorAngular2 {
	menus: Array<Object>;
	constructor () {
		this.menus = [
			{
			'name':'Home',
			'page':'Welcome Home'
			},
			{
			'name':'Contact Us',
			'page':'Address'
			}
		];
	}
}

bootstrap(MeteorAngular2);

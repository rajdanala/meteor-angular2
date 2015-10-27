/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component,NgFor, View, bootstrap} from 'angular2/angular2';
import {bootstrap} from 'angular2-meteor';
import {Pages} from 'collections/pages';

@Component({
	selector: 'app'
})
@View({
	templateUrl: 'client/app.html',
	directives: [NgFor]
})
class MeteorAngular2 {
	pages: Array<Object>;
	constructor () {
		Tracker.autorun(zone.bind(() => {
			this.pages = Pages.find().fetch();
		}));
	}
}

bootstrap(MeteorAngular2);

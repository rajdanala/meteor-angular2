/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component,NgFor, View} from 'angular2/angular2';
import {bootstrap} from 'angular2-meteor';
import {Pages} from 'collections/pages';
import {PagesForm} from 'client/admin/pages-form';

@Component({
	selector: 'app'
})
@View({
	templateUrl: 'client/app.html',
	directives: [NgFor,PagesForm]
})
export class MeteorAngular2 {
	pages: Mongo.Cursor<Object>;

	constructor () {

			this.pages = Pages.find();

	}
	removePage(page){
		console.log(page._id);
		  Pages.remove(page._id);
	}
}

bootstrap(MeteorAngular2);

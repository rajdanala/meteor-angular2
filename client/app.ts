/// <reference path="../typings/angular2-meteor.d.ts" />
import {Component,NgFor, View, provide} from 'angular2/angular2';

import {bootstrap} from 'angular2-meteor';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

import {Nav} from 'client/public/nav';
import {PageDetails} from 'client/public/page-details'

@Component({
	selector: 'app'
})
@View({
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: '/', as: 'Nav',component: Nav},
	{path: '/page/:pageId', as:'PageDetails', component: PageDetails}
])

class MeteorAngular2 {}

bootstrap(MeteorAngular2, [ROUTER_PROVIDERS,provide(APP_BASE_HREF,{useValue:'/'})]);

/// <reference path="../../typings/angular2-meteor.d.ts" />
import {Component, View} from 'angular2/angular2';

import {RouteParams} from 'angular2/router';
import {RouterLink} from 'angular2/router';

import {Pages} from 'collections/pages'
@Component({
  selector: 'page-details'
})

@View({
  templateUrl: 'client/public/page-details.html',
  directives: [RouterLink]
})

export class PageDetails {
  page: Object;

  constructor(params: RouteParams) {
    var pageId = params.get('pageId');
    this.page = Pages.findOne(pageId);
  }
}

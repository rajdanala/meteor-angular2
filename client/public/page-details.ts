/// <reference path="../../typings/angular2-meteor.d.ts" />
import {Component, View, Inject} from 'angular2/angular2';

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

  constructor(@Inject(RouteParams) routeParams: RouteParams) {
    this.pageId = routeParams.params.pageId;
  }
  onActivate() {
    this.page = Pages.find(this.pageId).fetch()[0];
    if(this.page) {
      return true;
    }
  }

}

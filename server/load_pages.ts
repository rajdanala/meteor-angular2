import {Pages} from 'collections/pages';

export function loadPages() {
  if(Pages.find().count() === 0) {
    var pages = [
      {
       'name': 'Home',
       'content':'Welcome to Meteor and Angular2!'
      },
      {
      'name': 'About',
      'content':'Raj Danala'
      }
    ];
    for(var i=0; i < pages.length; i++){
      Pages.insert(pages[i]);
    }
  }
};

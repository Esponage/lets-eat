import $ from 'jquery';
import Backbone from 'backbone';

import Session from './models/session';
import User from './models/user';
import UserCollection from './models/user-collection';
import CommentsCollection from './models/comment-collection';

let session, users, comments;

function searchResults(searchValue) {
  var searchValue = "Greenville Sc";
  var key = "&KEY=MOW7yxYUAObHJNI1wiQDt0VUMJ5sl9zQLfMsFXBu";
  $.ajax('http://api.v3.factual.com/t/restaurants-us?q=' + searchValue + key);
};

searchResults();


export default {
  getSession() {
    return (session = session || new Session());
  },

  getUserCollection() {
    return (users = users || new UserCollection());
  },

  getCommentsCollection() {
    return (comments = comments || new CommentsCollection());
  }
};

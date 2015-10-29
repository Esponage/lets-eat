import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Session from './models/session';
import User from './models/user';
import UserCollection from './models/user-collection';
import CommentsCollection from './models/comment-collection';
import RestaurantCollection from './models/restaurant-collection';

let session, users, comments;

// function searchResults(searchValue) {
//   var searchValue = "Greenville Sc";
//   var key = "&KEY=MOW7yxYUAObHJNI1wiQDt0VUMJ5sl9zQLfMsFXBu";
//   $.ajax('http://api.v3.factual.com/t/restaurants-us?q=' + searchValue + key);
// };
//
// searchResults();

let restaurants = new RestaurantCollection();

var Store = _.extend({}, Backbone.Events, {

  initialize() {
    this.listenTo(restaurants, 'add remove change', this.trigger.bind(this, 'change'));
  },

  getSession() {
    return (session = session || new Session());
  },

  getUserCollection() {
    return (users = users || new UserCollection());
  },

  getCommentsCollection() {
    return (comments = comments || new CommentsCollection());
  },

  getRestaurantCollection(model, search) {
    return( new RestaurantCollection(model, {search: search}))
  },

  searchRestaurants(search) {
    restaurants.setSearch(search);
    restaurants.fetch();
  },

  getRestaurants() {
    return restaurants.toJSON();
  }
});

Store.initialize();

export default Store;

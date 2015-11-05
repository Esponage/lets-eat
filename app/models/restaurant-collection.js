import Backbone from 'backbone';
import store from '../store';
import $ from 'jquery';
import '../jsonpproxy.js';

var RestaurantCollection = Backbone.Collection.extend({
 url() {
   // return "https://jsonp.afeld.me/?url=" + encodeURIComponent("https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + this.search + "&key=AIzaSyC-Q2PvTSqrIoZpPWF9rlTcDoIJtxVZQcM&libraries=places");
     return "http://localhost:5050/api/v2.1/search?q=" + this.search;
 },

 setSearch(search) {
   this.search = search;
 },

 parse(response) {
   console.log(response);
   return response.restaurants;
 }

});

export default RestaurantCollection;

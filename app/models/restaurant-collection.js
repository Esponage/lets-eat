import Backbone from 'backbone';
import store from '../store';

var RestaurantCollection = Backbone.Collection.extend({
  url() {
    return 'http://api.v3.factual.com/t/restaurants-us?q='
    + this.search + "&KEY=8nt8qQk9ES7pAAYigH2rkZvFayaTKIDpUe5W2EWI"
  },

  setSearch(search) {
    this.search = search;
  },

  parse(response) {
    return response.response.data;
  }

});

export default RestaurantCollection;

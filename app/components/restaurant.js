import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';


var Search = React.createClass({

  mixins: [BackboneMixin],

  getModels() {
    return {
      restaurants: store.getRestaurants()
    };
  },

  handleSubmit(e) {
    e.preventDefault();
    let search = this.refs.search.value;
    store.searchRestaurants(search);
  },

  render() {
    return (
      <div>
        <div>
          <form className="top-nav" onSubmit={this.handleSubmit}>
            <input type="search" className="search-box" placeholder="Find Food and Friends..." ref="search" />
          </form>
        </div>
        <div>
          <Link to="/index"><button className="x-button"><i className="fa fa-times search-x"></i></button></Link>
        </div>
        <div className="is-searching not-searching">
          <ul className="search-results-ul">
            {this.state.restaurants.map((result) => <div key={result.restaurant.R.res_id}><li className="search-results">{result.restaurant.name}</li> <li>{result.restaurant.cuisines}</li><li>Average Cost for two: {result.restaurant.currency}{result.restaurant.average_cost_for_two}</li><li>{result.restaurant.location.city}</li> <li>{result.restaurant.user_rating.aggregate_rating}</li></div> )}
          </ul>
      </div>
      </div>
    );
  }
});

export default Search;

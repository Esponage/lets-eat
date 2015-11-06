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
            {this.state.restaurants.map((result) => <li className="search-results" key={result.restaurant.R.res_id}><img src={result.restaurant.featured_image || result.restaurant.thumbnail} />{result.restaurant.name} {result.restaurant.location.address}</li> )}
          </ul>
      </div>
      </div>
    );
  }
});

export default Search;

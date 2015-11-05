import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';


var Search = React.createClass({

  mixins: [BackboneMixin],

  getInitialState (){
    return {
      isSearching: false
    };
  },

  getModels() {
    return {
      restaurants: store.getRestaurants()
    };
  },

  toggleSearch() {
    this.setState({
      isSearching: !this.state.isSearching

    });
  },

  handleSubmit(e) {
    e.preventDefault();
    let search = this.refs.search.value;
    store.searchRestaurants(search);
  },

  render() {
    var searchClass = this.state.isSearching ? 'fa-times' : 'fa-search';
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {this.state.isSearching && <input type="search" className="search-box" placeholder="Find Food and Friends..." ref="search" />}
      </form>
        <div className="top-nav">
          <button className="hamburger"><i className="fa fa-bars"></i></button>
          <img src="" alt="" />
          <button className="search-button" onClick={this.toggleSearch}><i className={"fa " + searchClass}></i></button>
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

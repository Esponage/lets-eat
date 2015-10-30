import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import Search from '../components/search';
import store from '../store';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';


var Index = React.createClass({

  mixins: [BackboneMixin],

  getInitialState (){
    return {
      isSearching: false
    };
  },

  getModels() {
    return {
      restaurants: store.getRestaurants()
    }
  },

  toggleSearch() {
    this.setState({
      isSearching: !this.state.isSearching

    })
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
          <img src="" alt="" />
            <button className="search-button" onClick={this.toggleSearch}><i className={"fa " + searchClass}></i></button>
          </div>
      <div>
        <h1>Search Restaurants</h1>
          <ul>
            {this.state.restaurants.map((result) => <li key={result.factual_id}>{result.name}</li> )}
          </ul>
      </div>
        <div>
          <footer>
            <nav className="dashboard-nav">
              <Link to="/deals"><button className="dashboard-nav-buttons1"><i className="fa fa-tag"></i></button></Link>
              <Link to="/location"><button className="dashboard-nav-buttons2"><i className="fa fa-map-marker"></i></button></Link>
              <Link to="/index"><button className="dashboard-nav-buttons3"><i className="fa fa-home"></i></button></Link>
              <Link to="/favorites"><button className="dashboard-nav-buttons4"><i className="fa fa-thumbs-o-up"></i></button></Link>
              <Link to="/profile"><button className="dashboard-nav-buttons5"><i className="fa fa-user"></i></button></Link>
            </nav>
          </footer>
        </div>
      </div>
    );
  }
});

export default Index;

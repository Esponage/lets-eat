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


  // handleSearch () {
  //   this.setState ({
  //     isSearching: this.State.isSearching
  //   });
  // },

  toggleSearch() {
    $(".fa-search").toggle();
    $(".fa-times").toggle();
    this.setState({
      isSearching: !this.state.isSearching

    })
  },
  // componentWillMount() {
  //     this.state.restaurant.on('change', this.forceUpdate.bind(this, null), this);
  // },
  //
  // componentWillUnmount() {
  //     this.state.restaurant.off('change', null, this);
  // },

  handleSubmit(e) {
    e.preventDefault();
    let search = this.refs.search.value;
    store.searchRestaurants(search);
  },
    // this.setState.restaurant = store.getRestaurantCollection([], this.refs.search);
    //   this.state.restaurant.fetch().then(
    //     ()=> {
    //       this.setState({
    //         restaurant: this.state.restaurant
    //       })
    //     }
    //   )






  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {this.state.isSearching && <input type="search" className="search-box" placeholder="Find Food and Friends..." ref="search" />}
      </form>
        <div className="top-nav">
          <img src="" alt="" />
            <button className="search-button" onClick={this.toggleSearch}><i className="fa fa-search"></i><i className="fa fa-times"></i></button>
          </div>
      <div>
        <h1>Search Restaurants</h1>
            {this.state.restaurants.map((result) => <Index key={result.factual_id} {...result}/> )}

      </div>

        <div className="row">
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

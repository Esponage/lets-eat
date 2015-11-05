import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
// import Search from '../components/search';
import Backbone from 'backbone';
import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';


var Index = React.createClass({

  render (){
    return (
      <div>
        <nav className="top-nav">
          <Link to="/profile"><button className="profile-button"><i className="fa fa-user"></i></button></Link>
          <Link to="/search"><button className="search-button"><i className="fa fa-search"></i></button></Link>
        </nav>
        <button className="randomize-button"></button>
      </div>
    );
  }
});

export default Index;

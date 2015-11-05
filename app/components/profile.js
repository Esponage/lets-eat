import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import store from '../store';
import Login from '../components/login';
// import Search from '../components/search';
// import Backbone from 'backbone';
// import BackboneMixin from '../mixins/backbone';
import $ from 'jquery';

var Profile = React.createClass ({



  render (){
    return (
      <div className="container">
      <div>
        <header className="profile-header">
          <button className="back-button"><i className="fa fa-times"></i></button>
          <img className="profile-pic" src="https://pbs.twimg.com/profile_images/659358689132957696/VUuMaLOq.jpg" alt="profile picture" />
          <h1 className="profile-name">Anthony Bluemmel</h1>
        </header>
        <div>
          <footer>
            <button className="sign-out-button" type="button" name="button" onClick={this.logOut}>Sign Out</button>
            </footer>
        </div>
      </div>
        <section className="favorites-section"></section>
      </div>
    )
  }
});

export default Profile;

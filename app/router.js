import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import Login from './components/login';
import LoginForm from './components/loginform';
import Signup from './components/signupform';
import Profile from './components/profile';
import Deals from './components/deals';
import Favorites from './components/favorites';
import Location from './components/location';

import store from './store';

function requireAuth(nextState, replaceState) {
  if( ! store.getSession().isAuthenticated() ) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

function requireNotAuth(nextState, replaceState) {
  if(store.getSession().isAuthenticated()) {
    replaceState({}, '/');
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Index} onEnter={requireAuth} />
      <Route path="login" component={Login} onEnter={requireNotAuth} />
      <Route path="loginform" component={LoginForm} onEnter={requireNotAuth} />
      <Route path="signupform" component={Signup} onEnter={requireNotAuth} />
      <Route path="profile" component={Profile} onEnter={requireAuth} />
      <Route path="index" component={Index} onEnter={requireAuth} />
      <Route path="favorites" component={Favorites} onEnter={requireAuth} />
      <Route path="location" component={Location} onEnter={requireAuth} />
      <Route path="deals" component={Deals} onEnter={requireAuth} />
    </Route>
  </Router>
), document.getElementById('application'));

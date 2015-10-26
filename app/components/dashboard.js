import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';


var Dashboard = React.createClass({

handleLogin(e) {
  e.preventDefault();
},

handleSignUp(e) {
  e.preventDefault();
},

  render() {
    return (
      <div>
          <h1>Hello</h1>
      </div>
    );
  }
});

export default Dashboard;

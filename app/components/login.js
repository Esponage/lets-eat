import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';


var Login = React.createClass({

handleLogin(e) {
  e.preventDefault();
},

handleSignUp(e) {
  e.preventDefault();
},

  render() {
    return (
      <div>
        <Link to="loginform"><button>Login</button></Link>
        <Link to="signupform"><button>Signup</button></Link>
      </div>
    );
  }
});

export default Login;

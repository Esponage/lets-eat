import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';


var Login = React.createClass({

handleLogin(e) {
  e.preventDefault();
},

handleSignUp(e) {
  e.preventDefault();
},

render(){
  return (
      <div>
        <div className="vid-div">
          <video className="bgvid" src="davidequatelapeopleinfrankfurtmp4.mp4" type="video/mp4" autoPlay="autoplay" muted="muted" preload="auto" loop />
        </div>
        <div className="button-logs">
          <ul className="log-buttons">
            <li>
              <Link to="/loginform"><button className="go-button" type="button" name="button">Login</button></Link>
            </li>
            <li>
              <Link to="/signupform"><button className="go-button2" type="button" name="button">Sign Up</button></Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default Login;

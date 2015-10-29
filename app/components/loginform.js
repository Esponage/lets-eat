import React from 'react';
import { History, Route, RouteHandler, Link } from 'react-router';
import store from '../store';

const LoginForm = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    password: React.PropTypes.string,
    location: React.PropTypes.object
  },

  mixins: [ History ],

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(e) {
  e.preventDefault();
  console.log("hello");
  let username = this.refs.username.value
  let password = this.refs.password.value

  let session = store.getSession();

  session.authenticate({username, password}).then((loggedIn) => {
    if (!loggedIn)
      return this.setState({ error: true })

      var { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/')
      }
  })
},

render () {
  return (
    <div className="login-container">
      <Link to="/login"><button className="signup-back"><i className="fa fa-angle-left"></i></button></Link>
    <form onSubmit={this.handleSubmit}>
      <input className="login-username loginsy" type="text" placeholder="Username" defaultValue={this.props.username} ref="username" />
      <input className="login-password loginsy" type="text" placeholder="Password" defaultValue={this.props.password} ref="password" />
      <button type="submit" className="submit-login"><i className="fa fa-angle-right"></i></button>
      {this.state.error && (
        <p>Bad Login Information</p>
      )}
    </form>
    </div>
    );
  }
});
export default LoginForm;

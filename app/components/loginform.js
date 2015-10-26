import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import store from '../store';

const LoginForm = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    password: React.PropTypes.string
  },

  handleSubmit(e) {
  e.preventDefault();
  store.getUsersCollection().create({
    username: this.refs.username.value,
    password: this.refs.password.value,
    creator: store.getSession().get('currentUser')
  }, {wait: true});
},

render () {
  return (
    <div className="login-container">
    <form action="">
      <input className="login-username loginsy" type="text" placeholder="Username" defaultValue={this.props.username} ref="username" />
      <input className="login-password loginsy" type="text" placeholder="Password" defaultValue={this.props.password} ref="password" />
      <button className="submit-login"><i className="fa fa-angle-right"></i></button>
    </form>
    </div>
    );
  }
});
export default LoginForm;

import React from 'react';
import { Router, RouteHandler, Link } from 'react-router';

import store from '../store';

const Signup = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string
  },

  handleSubmit(e) {
  e.preventDefault();
  store.getUserCollection().create({
    email: this.refs.email.value,
    username: this.refs.username.value,
    password: this.refs.password.value,
    creator: store.getSession().get('currentUser')
  }, {wait: true});
},

render () {
  return (
    <div className="signup-container">
      <form action="">
        <input className="signup-email" type="text" placeholder="Email" defaultValue={this.props.email} ref="email" />
        <input className="signup-username" type="text" placeholder="Username" defaultValue={this.props.username} ref="username" />
        <input className="signup-password" type="text" placeholder="Password" defaultValue={this.props.password} ref="password" />
        <button className="signup-login"><i className="fa fa-angle-right"></i></button>
      </form>
    </div>
    );
  }
});
export default Signup;

import React from 'react';
import { Router, RouteHandler, Link } from 'react-router';

import store from '../store';

const Signup = React.createClass({
  propTypes: {
    firstname: React.PropTypes.string,
    lastname: React.PropTypes.string,
    email: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string
  },

  handleSubmit(e) {
  e.preventDefault();
  store.getUserCollection().create({
    firstname: this.refs.firstname.value,
    lastname: this.refs.lastname.value,
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
        <button className="signup-back"><i className="fa fa-chevron-left"></i></button>
        <input className="signup-first" type="text" placeholder="First Name" defaultValue={this.props.firstname} ref="firstname" />
        <input className="signup-last" type="text" placeholder="Last Name" defaultValue={this.props.lastname} ref="lastname" />
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

import React from 'react';
import { Router, RouteHandler, Link } from 'react-router';

import store from '../store';

const Signup = React.createClass({
  propTypes: {
    email: React.PropTypes.string,
    userName: React.PropTypes.string,
    password: React.PropTypes.string
  },

  handleSubmit(e) {
  e.preventDefault();
  store.getUsersCollection().create({
    name: this.refs.name.value,
    userName: this.refs.userName.value,
    password: this.refs.password.value,
    creator: store.getSession().get('currentUser')
  }, {wait: true});
},

render () {
  return (
    <form action="">
      <input type="text" placeholder="Email" defaultValue={this.props.email} ref="email" />
      <input type="text" placeholder="User Name" defaultValue={this.props.userName} ref="username" />
      <input type="text" placeholder="password" defaultValue={this.props.password} ref="password" />
      <button>Submit</button>
    </form>
    );
  }
});

export default Signup;
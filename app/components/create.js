import React from 'react';

import store from '../store';

const UserCreateInput = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired,
    userName: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired
  },

  handleSubmit(e) {
    preventDefault();
    store.
  },

render () {
  return (
    <form action="">
      <input type="text" placeholder="Email" defaultValue={this.props.email} ref="email" />
      <input type="text" placeholder="User Name" defaultValue={this.props.userName} ref="username" />
      <input type="text" placeholder="password" defaultValue={this.props.password} ref="password" />
      <input type="text" placeholder="validate passsword" defaultValue={this.props.password} ref="password" />
      <button>Submit</button>
    </form>
    );
  }
});

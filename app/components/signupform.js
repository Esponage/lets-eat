import React from 'react';
import { History, Router, RouteHandler, Link } from 'react-router';
import User from '../models/user';

import store from '../store';

const Signup = React.createClass({
  propTypes: {
    location: React.PropTypes.object,
    firstname: React.PropTypes.string,
    lastname: React.PropTypes.string,
    email: React.PropTypes.string,
    username: React.PropTypes.string,
    password: React.PropTypes.string
  },

  mixins: [ History ],

  getInitialState() {
   return {
     error: false
   }
 },

  handleSubmit(e) {
  e.preventDefault();

  let firstname = this.refs.firstname.value;
  let lastname = this.refs.lastname.value;
  let username = this.refs.username.value;
  let password = this.refs.password.value;
  let email = this.refs.email.value;

  let user = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    username: username,
    password: password,
    creator: store.getSession().get('currentUser')
  });

  store.getUserCollection().add(user);

  user.save().then(() => {
    return store.getSession().authenticate({sessionToken: user.get('sessionToken')}).then(() => {
      let { location } = this.props;
      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname);
      } else {
        this.history.replaceState(null, '/');
      }
    });
  }, (xhr) => {
    this.setState({ error: xhr.responseJSON.error });
  });
},

render () {
  return (
    <div className="signup-container">
      <form onSubmit={this.handleSubmit}>
        <button className="signup-back"><i className="fa fa-angle-left"></i></button>
        <input className="signup-first" type="text" placeholder="First Name" defaultValue={this.props.firstname} ref="firstname" />
        <input className="signup-last" type="text" placeholder="Last Name" defaultValue={this.props.lastname} ref="lastname" />
        <input className="signup-email" type="text" placeholder="Email" defaultValue={this.props.email} ref="email" />
        <input className="signup-username" type="text" placeholder="Username" defaultValue={this.props.username} ref="username" />
        <input className="signup-password" type="password" placeholder="Password" defaultValue={this.props.password} ref="password" />
        <button className="signup-login"><i className="fa fa-angle-right"></i></button>
        {this.state.error && (
          <p>{this.state.error}</p>
        )}
      </form>
    </div>
    );
  }
});
export default Signup;

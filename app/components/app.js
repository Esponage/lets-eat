import React from 'react';
import { IndexLink } from 'react-router';
import store from '../store';

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  componentWillMount() {
    store.getSession().on('change', this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount() {
    store.getSession().off('change', null, this);
  },

  handleLogout(e) {
    e.preventDefault();
    session.invalidate();
  },

  render() {
    let session= store.getSession();
    let loggedIn = session.isAuthenticated();
    let currentUser = session.get('currentUser');
    let username = (currentUser && currentUser.get('username')) || 'Me';

    return (
      <div>
        <nav className="top-bar" data-topbar role="navigation">
          <ul className="title-area">
            <li className="name">
              <h1><IndexLink to="/">Home</IndexLink></h1>
            </li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }

});

export default App;

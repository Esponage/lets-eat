import $ from 'jquery';
import Backbone from 'backbone';

import Session from './models/session';
import User from './models/user';
import UserCollection from './models/user-collection';

let session, users;
export default {
  getSession() {
    return (session = session || new Session());
  },

  getUserCollection() {
    return (users = users || new UserCollection());
  }
};

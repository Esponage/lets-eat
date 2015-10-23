import $ from 'jquery';
import Backbone from 'backbone';
import User from './user';

const Session = Backbone.Model.extend({
  authenticate(options) {
    if(options.username) {
      $.ajax({
        url: "https://api.parse.com/1/login",
        data: {
          username: options.username,
          password: options.password
        }
      }).then((response) => {
          this.set('currentuser', new User(response));
          localStorage.setItem('parse-session-token', response.sessionToken);
          this.trigger('authentificationSucceeded');
      });
    } else {
        var user = new User(options);
        this.set('currentUser', user);
        this.trigger('authentificationSucceeded');
        user.fetch();
    }
  },

  restore() {
    var token = localStorage.getItem('parse-session-token');
    if(token) {
      this.authenticate({sessionToken: token});
    }
  },

  invalidate() {
    localStorage.removeItem('parse-session-token');
    this.trigger('invalidationSucceeded');
    window.location.reload();
  },

  isAuthenticated() {
    return !!this.get('currentUser');
  }
});

export default Session;

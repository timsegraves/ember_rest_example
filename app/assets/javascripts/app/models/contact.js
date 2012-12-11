App.User = Ember.Resource.extend({
  resourceUrl:        'http://sendgrid.dev/kasi/users.json?callback=?',
  resourceName:       'user',
  resourceProperties: ['username', 'email']
});

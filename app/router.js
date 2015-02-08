import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home", { path: '/' }, function() {
    this.route("news");
    this.route("artists");
    this.route("galleryWindow");
    this.route("galleryAside");
  });
  this.route("styleguide");
});

export default Router;

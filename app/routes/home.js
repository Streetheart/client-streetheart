import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
      this.render();
      this.render("news", {
        outlet: "news", into: "home"
      });
      this.render("galleryWindow", {
        outlet: "galleryWindow", into: "home"
      });
      this.render("galleryAside", {
        outlet: "galleryAside", into: "home"
      });
      this.render("artists", {
        outlet: "artists", into: "home"
      });
    }
});

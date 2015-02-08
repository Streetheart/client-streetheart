import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        title: "Latest News",
        body: "Applications for Denver Public Art's Urban Art Fund close on March 31st. Be sure to head over to their site and get your application in ASAP. Grants range from $500-$5,000 for street art projects!",
        link: "http://artsandvenuesdenver.com/public-art/urban-arts-fund/mural-project-application/",
        linkText: "View details »"
      },
      {
        title: "Need a wall?",
        body: "We’re partnering with business and property owners around town to help artists find locations to paint. Artists, you probably don’t want to spend your time hunting down walls and cozying up to business owners. We want to make that process easier, so you can get out and create more art around Denver!",
        link: null,
        linkText: null
      },
      {
        title: "Want a mural?",
        body: "Get in touch with us if you’re interested in having an artist paint a mural on your property. Street art will draw attention to your business, and it's a great way to beautify your community. We’re working with artists and alongside the city to make the process of matching artists to your businesses easier every day.",
        link: null,
        linkText: null
      }
    ];
  }
});

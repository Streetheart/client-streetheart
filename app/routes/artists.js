import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        firstName: "Joe",
        lastName: "Guy",
        avatar: "some_string.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Dan",
        lastName: "Ban",
        avatar: "kepp_reand_fsdf.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Jimmy",
        lastName: "Limmy",
        avatar: "here_to_go.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Cow",
        lastName: "Animal",
        avatar: "more_image_strings.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Rando",
        lastName: "Person",
        avatar: "what_the_image.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Shelly",
        lastName: "Smelly",
        avatar: "sdfjslfd_dsfs_sdf.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Bob",
        lastName: "Dob",
        avatar: "sdfhsdlkfjasdfsd_sdjfsdfj.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
      {
        firstName: "Sammie",
        lastName: "Whammie",
        avatar: "jfe8jldfj_sdfus_fjsdif.jpg",
        twitter: "mrjadaml",
        instagram: "mrjadaml"
      },
    ];
  }
});

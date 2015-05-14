HemmingsClone.Views.SearchBox = Backbone.CompositeView.extend({
  initialize: function(options) {

  },
  events: {
    "submit form": "search"
  },

  template: JST["static/search"],

  render: function() {
    this.$el.html(this.template({}));
    return this;
  },

  search: function(event) {
    event.preventDefault();
    var data = $(event.currentTarget).serializeJSON();
    console.log(data);
  }
})

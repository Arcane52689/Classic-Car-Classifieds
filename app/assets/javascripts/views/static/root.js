HemmingsClone.Views.RootView = Backbone.CompositeView.extend({
  tagName: "article",
  className: "root",
  template: JST["static/root"],
  events: {
    "click li":"visitLink"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  visitLink: function(event) {
    event.preventDefault();
    var url = $(event.currentTarget).find("a").attr("href");
    Backbone.history.navigate(url, {trigger: true})
  }
})

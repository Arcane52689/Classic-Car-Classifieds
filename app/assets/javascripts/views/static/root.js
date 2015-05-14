HemmingsClone.Views.RootView = Backbone.CompositeView.extend({
  tagName: "article",
  className: "root",
  template: JST["static/root"],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
})

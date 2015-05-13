HemmingsClone.Views.RootView = Backbone.CompositeView.extend({
  template: JST["static/root"],

  render: function() {
    this.$el.html(this.template());
    return this;
  }
})

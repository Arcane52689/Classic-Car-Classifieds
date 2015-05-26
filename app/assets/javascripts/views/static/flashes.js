HemmingsClone.Views.Flashes = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "flash", this.render)
  },

  template: JST["static/flashes"],

  tagName: "ul",

  className: "flash-messages",

  render: function() {
    this.$el.html(this.template({messages: this.model.messages()}));
    return this;
  }
})

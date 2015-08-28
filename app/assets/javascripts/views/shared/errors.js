HemmingsClone.Views.ErrorList = Backbone.View.extend({
  initialize: function(options) {
    this.errorList = options.errorList
  },

  tagName: 'ul',
  className: "error-list",

  template: JST["shared/errors"],

  render: function() {
    this.$el.html(this.template({errors: this.errorList}));
    return this;
  }
})

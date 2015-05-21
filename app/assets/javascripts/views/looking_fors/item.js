HemmingsClone.Views.LookingForItem = Backbone.View.extend({
  tagName: "article",

  className: "looking-for item",

  template: JST["looking_fors/item"],

  events: {
    "click .title": "show"
  },

  render: function() {
    debugger
    this.$el.html(this.template({request: this.model}))
    return this;
  },

  show: function(event) {
    event.preventDefault();
    HemmingsClone.PopUps.showLookingFor(this.model);
  }
})

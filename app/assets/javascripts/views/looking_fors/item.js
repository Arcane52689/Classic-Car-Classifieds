HemmingsClone.Views.LookingForItem = Backbone.View.extend({
  tagName: "article",

  className: "looking-for item",

  template: JST["looking_fors/item"],

  events: {
    "click .title": "show"
  },

  render: function() {

    this.$el.html(this.template({request: this.model}))
    if (this.model.get("recent_matches") > 0 ) {
      this.$el.addClass("new-matches")
    }

    return this;
  },

  show: function(event) {
    event.preventDefault();
    HemmingsClone.PopUps.showLookingFor(this.model);
  }
})

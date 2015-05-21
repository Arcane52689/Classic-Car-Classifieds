HemmingsClone.Views.LookingForShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .close": "close",
    "click .destroy": "destroy"
  },

  tagName: "article",

  className: "show-view",

  template: JST["looking_fors/show"],

  render: function() {
    this.$el.html(this.template({model: this.model }))
    this.addMatches()
    return this;
  },

  close: function(event) {
    this.remove();
    $("#pop-up").removeClass("inactive").addClass("inactive");
  },

  destroy: function() {
    this.model.destroy({
      success: function() {
        this.close()
      }.bind(this)
    })
  },

  addMatches: function() {
    var view
    var viewFn = this.model.matches().view;
    this.model.matches().each(function(match) {

      view = new viewFn({ model: match, link: true });
      this.addSubview(".results", view);
    }.bind(this))
  }

})

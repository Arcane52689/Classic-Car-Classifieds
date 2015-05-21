HemmingsClone.Views.LookingForShow = Backbone.CompositeView.extend({
  events: {
    "click .close": "close",
    "click .destroy": "destroy"
  },

  tagName: "article",

  className: "show-view",

  template: JST["looking_fors/show"],

  render: function() {
    this.$el.html(this.template({model: this.model }))
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
  }

})

HemmingsClone.Views.UpdateUser = Backbone.View.extend({
  tagName: "form",
  className: "update-email",
  events: {
    "submit": "submit"
  },

  template: JST["users/update"],

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    debugger
    this.model.save(data, {
      success: function() {
        this.close();
        Backbone.history.navigate("",{trigger: true})
      }.bind(this),
      error: function() {
        this.render()
      }.bind(this)
    })
  }
})

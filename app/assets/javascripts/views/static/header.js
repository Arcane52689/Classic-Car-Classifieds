HemmingsClone.Views.Header = Backbone.View.extend({
  initialize: function() {
    this.listenTo(HemmingsClone.currentUser)
  }
})

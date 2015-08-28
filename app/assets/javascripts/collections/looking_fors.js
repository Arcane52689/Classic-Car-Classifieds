HemmingsClone.Collections.LookingFors = Backbone.Collection.extend({
  initialize: function(options) {
    this.view = HemmingsClone.Views.LookingForItem
  },

  url: "api/looking_fors",

  model: HemmingsClone.Models.LookingFor,
})

HemmingsClone.Collections.Vehicles = Backbone.Collection.extend({
  initialize: function(options) {
    this.make = options.make
  },

  model: HemmingsClone.Models.Vehicle,

  setMake:function(make) {
    this.remove()
    this.make = make
    this.fetch()
  },

  url: function() {
    return "api/vehicle_models/"+ this.make;
  }

})

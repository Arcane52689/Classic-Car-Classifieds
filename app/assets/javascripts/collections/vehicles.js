HemmingsClone.Collections.Vehicles = Backbone.Collection.extend({
  initialize: function(options) {
    if (options) {
      this.make = options.make
    }
  },

  model: HemmingsClone.Models.Vehicle,

  setMake:function(make, callback) {
    this.remove()
    this.make = make
    this.fetch({
      success: function() {
        callback && callback();
      }
    })
  },

  url: function() {
    return "api/vehicle_models/"+ this.make;
  },

  allModels: function() {
    var result = [];
    this.each(function(c) {
      result.push(c.escape("model"));
    })
    return result;
  }

})

HemmingsClone.Models.LookingFor = Backbone.Model.extend({

  urlRoot: "api/looking_fors",

  parse: function(response) {
    this.vehicle().set(response.vehicle)
    delete response.vehicle
    return response
  },

  vehicle: function() {
    if (!this._vehicle) {
      this._vehicle = new HemmingsClone.Models.Vehicle()
    }
    return this._vehicle
  }


})

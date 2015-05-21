HemmingsClone.Models.LookingFor = Backbone.Model.extend({

  urlRoot: "api/looking_fors",

  parse: function(response) {
    this.vehicle().set(response.vehicle)
    delete response.vehicle

    if (response.matches) {
      this.matches().set(response.matches, {parse: true})
      delete response.matches()
    }

    return response
  },

  vehicle: function() {
    if (!this._vehicle) {
      this._vehicle = new HemmingsClone.Models.Vehicle()
    }
    return this._vehicle
  },

  matches: function() {
    if (!this._matches) {
      console.log(this.get("for_part"))
      if (!this.get("for_part")) {
        this._matches = new HemmingsClone.Collections.PartSales();
      } else {
        this._matches = new HemmingsClone.Collections.VehicleSales();
      }
    }
    return this._matches
  }


})

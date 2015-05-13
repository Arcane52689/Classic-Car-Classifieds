HemmingsClone.Models.VehicleSale = Backbone.Model.extend({
  urlRoot: "api/vehicle_sales",
  vehicle: function() {
    if (!this._vehicle) {
      this._vehicle = new HemmingsClone.Models.Vehicle();
    }
    return this._vehicle;
  },

  parse: function(response) {
    this.vehicle().set(response.vehicle);
    delete response.vehicle;
    return response;
  }
})

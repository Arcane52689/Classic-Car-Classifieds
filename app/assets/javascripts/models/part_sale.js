HemmingsClone.Models.PartSale = Backbone.Model.extend$({
  urlRoot: "api/part_sales",

  vehicles: function() {
    if (!this._vehicles) {
      this._vehicles = new HemmingsClone.Collections.Vehicles();
    }
    return this._vehicles;
  },

  parse: function(response) {
    this.vehicles().set(response.vehicles, { parse: true });
    delete response.vehicles;
    return response;
  }
})

HemmingsClone.Models.PartSale = Backbone.Model.extend({
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
  },


  listOf: function(attr) {
    var result = [];
    this.vehicles().each(function(car) {
      if (!_.contains(result, car.get(attr))) {
        result.push(car.get(attr))
      }
    })
    return result;
  },
})

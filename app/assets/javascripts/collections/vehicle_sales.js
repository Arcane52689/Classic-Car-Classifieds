HemmingsClone.Collections.VehicleSales = Backbone.Collection.extend({
  url: "api/vehicle_sales",
  model: HemmingsClone.Models.VehicleSale,
  initialize: function() {
    this.view = HemmingsClone.Views.VehicleSaleItem;
    this.sortBy = "price"
  },

  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  },

  comparator: function(sale) {
    if (this.sortBy == "year") {
      return sale.listOf("year").sort()[0];
    }
    else if (this.sortBy == "make"){
      return sale.listOf("make").sort()[0];
    }
    else if (this.sortBy == "model") {
      return sale.listOf("model").sort()[0];
    }
    else {
      return sale.get(this.sortBy)
    }

  }


})


HemmingsClone.Collections.VehicleSaleResults = HemmingsClone.Collections.VehicleSales.extend({
  model: HemmingsClone.Models.VehicleSale,

  initialize: function() {
    this.view = HemmingsClone.Views.VehicleSaleItem
  }

})

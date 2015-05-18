HemmingsClone.Collections.VehicleSales = Backbone.Collection.extend({
  url: "api/vehicle_sales",
  model: HemmingsClone.Models.VehicleSale,
  initialize: function() {
    this.view = HemmingsClone.Views.VehicleSaleItem;
    this.sortOption = "price"
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
    if (this.sortOption == "year") {
      return sale.listOf("year").sort()[0];
    }
    else if (this.sortOption == "make"){
      return sale.listOf("make").sort()[0];
    }
    else if (this.sortOption == "model") {
      return sale.listOf("model").sort()[0];
    }
    else {
      return sale.get(this.sortOption)
    }

  }


})


HemmingsClone.Collections.VehicleSaleResults = HemmingsClone.Collections.VehicleSales.extend({
  model: HemmingsClone.Models.VehicleSale,

  initialize: function() {
    this.view = HemmingsClone.Views.VehicleSaleItem
  }

})

HemmingsClone.Collections.VehicleSales = Backbone.Collection.extend({
  url: "api/vehicle_sales",
  model: HemmingsClone.Models.VehicleSale,


  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  }
})


HemmingsClone.Collections.VehicleSaleResults = Backbone.Collection.extend({
  model: HemmingsClone.Models.VehicleSale,

  initialize: function() {
    this.view = HemmingsClone.Views.VehicleSaleItem
  }

})

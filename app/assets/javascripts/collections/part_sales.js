HemmingsClone.Collections.PartSales = Backbone.Collection.extend({
  url: "api/part_sales",
  model: HemmingsClone.Models.PartSale,
  initialize: function() {
    this.view = HemmingsClone.Views.PartSalesItem
  },
  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  }

})


HemmingsClone.Collections.PartSaleResults = HemmingsClone.Collections.PartSales.extend({
  model: HemmingsClone.Models.PartSale,
  initialize: function() {
    this.view = HemmingsClone.Views.PartSalesItem
  }

})

HemmingsClone.Collections.Results = Backbone.Collection.extend({


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

  },


  grab: function() {
    this.fetch({data: this.searchData })
  },

  parse: function(response) {
    this._total_pages = response.total_pages
    if (response.sales) {
      return response.sales;
    }
    return response
  },

  pages: function(){
    return this._total_pages || 0;
  },


})




HemmingsClone.Collections.PartSales = HemmingsClone.Collections.Results.extend({
  url: "api/part_sales",
  model: HemmingsClone.Models.PartSale,
  initialize: function(stuff, options) {
    this.view = HemmingsClone.Views.PartSalesItem

    this.searchData = {
      sortBy: "price",
      page: 1
    }

    if (options) {
      this.query = options.query
    }
  },


})


HemmingsClone.Collections.PartSaleResults = HemmingsClone.Collections.PartSales.extend({
  model: HemmingsClone.Models.PartSale,
  url: function() {
    return "api/part_sales/search?" + this.query
  },
})

// Defines the Vehicle Sales results colllection

HemmingsClone.Collections.VehicleSales = HemmingsClone.Collections.Results.extend({
  url: "api/vehicle_sales",
  model: HemmingsClone.Models.VehicleSale,
  initialize: function(stuff, options) {

    this.view = HemmingsClone.Views.VehicleSaleItem;
    this.searchData = {
      sortBy: "price",
      page: 1
    }
    if (options) {
        this.query = options.query
    }
  },
})


HemmingsClone.Collections.VehicleSaleResults = HemmingsClone.Collections.VehicleSales.extend({
  url: function() {
    return "api/vehicle_sales/search?" + this.query
  },
})

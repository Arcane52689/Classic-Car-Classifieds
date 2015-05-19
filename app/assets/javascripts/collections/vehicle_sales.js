HemmingsClone.Collections.VehicleSales = Backbone.Collection.extend({
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

  getOrFetch: function(id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch();
    return model;
  },

  comparator: function(sale) {
    if (this.searchData.sortBy == "year") {
      return sale.listOf("year").sort()[0];
    }
    else if (this.searchData.sortBy == "make"){
      return sale.listOf("make").sort()[0];
    }
    else if (this.searchData.sortBy == "model") {
      return sale.listOf("model").sort()[0];
    }
    else {
      return sale.get(this.searchData.sortBy)
    }

  },

  grab: function() {
    this.fetch({data: this.searchData })
  },

  parse: function(response) {
    console.log(response)
    this._total_pages = response.total_pages
    return response.sales;
  },

  pages: function(){
    return this._total_pages || 0;
  },

})


HemmingsClone.Collections.VehicleSaleResults = HemmingsClone.Collections.VehicleSales.extend({
  url: function() {
    return "api/vehicle_sales/search?" + this.query
  },




})

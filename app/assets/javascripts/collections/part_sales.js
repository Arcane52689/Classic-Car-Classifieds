HemmingsClone.Collections.PartSales = Backbone.Collection.extend({
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
  }


})


HemmingsClone.Collections.PartSaleResults = HemmingsClone.Collections.PartSales.extend({
  model: HemmingsClone.Models.PartSale,
  url: function() {
    return "api/part_sales/search?" + this.query
  },


})

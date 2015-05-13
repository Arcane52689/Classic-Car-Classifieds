HemmingsClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.vehicle_sales = new HemmingsClone.Collections.VehicleSales();
    this.part_sales = new HemmingsClone.Collections.PartSales();
  },

  routes: {
    "vehicle_sales": "vs_index",
    "vehicle_sales/:id":"vs_show",
    "part_sales": "ps_index",
    "part_sales/:id": "ps_show"
  },

  vs_index: function() {
    this.vehicle_sales.fetch();
    var view = new HemmingsClone.Views.VehicleSalesIndex({
      collection: this.vehicle_sales
    });
    this._swapView(view);
  },

  vs_show: function(id) {
    var result = this.vehicle_sales.getOrFetch(id)
    var view = new HemmingsClone.Views.VehicleSaleShow({
      model: result
    })
    this._swapView(view);
  },


  ps_index: function() {
    this.part_sales.fetch();
    var view = new HemmingsClone.Views.PartSalesIndex({
      collection: this.part_sales
    });
    this._swapView(view);
  },

  ps_show: function(id) {
    var result = this.part_sales.getOrFetch(id)
    var view = new HemmingsClone.Views.PartSaleShow({
      model: result
    })
    this._swapView(view);
  },





  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove()
    }
    this._currentView = view
    this.$rootEl.html(view.render().$el)
  }

})

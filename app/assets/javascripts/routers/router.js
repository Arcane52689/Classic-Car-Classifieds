HemmingsClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.vehicle_sales = new HemmingsClone.Collections.VehicleSales();
  },

  routes: {
    "": "root"
  },

  root: function() {
    var view = new HemmingsClone.Views.RootView();
    this._swapView(view);
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

  vs_new: function() {

    var view = new HemmingsClone.Views.VehicleSaleForm({
      model: new HemmingsClone.Models.VehicleSale(),
      collection: this.vehicle_sales
    });
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


  ps_new: function() {
    var view = new HemmingsClone.Views.PartSaleForm({
      model: new HemmingsClone.Models.PartSale(),
      collection: this.part_sales
    });
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

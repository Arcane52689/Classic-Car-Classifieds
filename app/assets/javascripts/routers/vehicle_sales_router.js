HemmingsClone.Routers.VehicleSalesRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl
    this.vehicle_sales = new HemmingsClone.Collections.VehicleSales()
  },

  routes: {
  "vehicle_sales": "vs_index",
  "vehicle_sales/new": "vs_new",
  "vehicle_sales/:id":"vs_show"
  },

  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view
    this.$rootEl.html(view.render().$el)
  },

  vs_index: function() {
    this.vehicle_sales.fetch();
    var view = new HemmingsClone.Views.Results({
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



 })

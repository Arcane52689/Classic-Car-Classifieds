HemmingsClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.results = new HemmingsClone.Collections.VehicleSales();
  },

  routes: {
    "vehicle_sales": "vs_index",
    "vehicle_sales/:id":"vs_show"
  },

  vs_index: function() {
    this.results.fetch();
    var view = new HemmingsClone.Views.VehicleSalesIndex({
      collection: this.results
    });
    this._swapView(view);
  },

  vs_show: function(id) {
    var result = this.results.getOrFetch(id)
    var view = new HemmingsClone.Views.VehicleSaleShow({
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

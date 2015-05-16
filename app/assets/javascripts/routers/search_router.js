HemmingsClone.Routers.SearchRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = $("#main");

  },

  routes: {
    "search/vehicle_sales/:query": "searchVehicles",
    "search/part_sales/:query": "searchParts"
  },


  fireQuery: function(url, collection, data) {

    $.ajax({
      url: url,
      data: data,
      dataType: 'json',
      success: function(resp) {
        console.log(resp);
        collection.set(resp, {parse: true});
      }
    });

  },



  searchVehicles: function(data) {
    var results = new HemmingsClone.Collections.VehicleSaleResults();
    var view = new HemmingsClone.Views.Results({
      collection: results
    });
    this.fireQuery("/api/vehicle_sales/search", results, data);
    this._swapView(view);
  },

  searchParts: function(data) {
    var results = new HemmingsClone.Collections.PartSaleResults();
    var view = new HemmingsClone.Views.Results({
      collection: results
    });
    this.fireQuery("/api/part_sales/search", results, data);
    this._swapView(view);
  },




  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})

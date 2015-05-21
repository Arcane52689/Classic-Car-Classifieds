HemmingsClone.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.vehicle_sales = new HemmingsClone.Collections.VehicleSales();
  },

  routes: {
    "": "root",
    "my-listings":"showListings",
    "looking-for/new": "newRequest"
  },

  root: function() {
    var view = new HemmingsClone.Views.RootView();
    this._swapView(view);
  },


  showListings: function() {
    var view = new HemmingsClone.Views.UserShow({
      model: HemmingsClone.currentUser
    })
    this._swapView(view);
  },

  newRequest: function() {
    var view = new HemmingsClone.Views.LookingForForm({
      model: new HemmingsClone.Models.LookingFor()
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

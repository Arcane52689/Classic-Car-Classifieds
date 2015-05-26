HemmingsClone.Routers.PartSalesRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.part_sales = new HemmingsClone.Collections.PartSales();

  },

  routes: {
    "part_sales": "ps_index",
    "part_sales/new": "ps_new",
    "part_sales/:id": "ps_show"
  },

  ps_index: function() {
    this.part_sales.fetch();
    var view = new HemmingsClone.Views.Results({
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
      this._currentView.remove();
    }
      this._currentView = view;
      this.$rootEl.html(view.render().$el);
  },



 })

HemmingsClone.Views.VehicleSalesIndex = Backbone.CompositeView.extend$({

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render )
  },

  template: JST["vehicle_sales/index"],

  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(vehicle_sale) {
      var view = new HemmingsClone.Views.VehicleSaleItem({ model: vehicle_sale})
      this.addSubview(".vehicle-sales", view)
    }.bind(this));
    return this
  }
})

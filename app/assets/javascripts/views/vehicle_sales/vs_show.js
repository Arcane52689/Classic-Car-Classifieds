HemmingsClone.Views.VehicleSaleShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["vehicle_sales/show"],

  render: function() {
    this.$el.html( this.template({vehicle_sale: this.model }));
    return this;
  },
})

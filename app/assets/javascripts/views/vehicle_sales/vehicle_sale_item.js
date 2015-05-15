HemmingsClone.Views.VehicleSaleItem = Backbone.View.extend({
  tagName: "li",

  template: JST["vehicle_sales/item"],

  render: function() {
    this.$el.html(this.template({ sale: this.model }));
    return this;
  }

})

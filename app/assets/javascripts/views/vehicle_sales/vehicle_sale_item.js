HemmingsClone.Views.VehicleSaleItem = Backbone.View.extend({
  tagName: "li",

  template: JST["vehicle_sales/item"],

  render: function() {
    this.$el.html(this.template({ vehicle_sale: this.model }));
    return this;
  }

})

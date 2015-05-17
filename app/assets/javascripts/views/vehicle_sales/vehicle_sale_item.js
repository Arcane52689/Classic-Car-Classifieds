HemmingsClone.Views.VehicleSaleItem = Backbone.View.extend({
  tagName: "li",
  className: "item vehicle-sale",

  template: JST["vehicle_sales/item"],

  render: function() {
    this.$el.html(this.template({ sale: this.model }));
    this.$el.attr("data-id", this.model.id + "");

    return this;
  }

})

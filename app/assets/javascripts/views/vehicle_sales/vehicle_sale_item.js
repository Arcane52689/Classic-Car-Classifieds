
HemmingsClone.Views.VehicleSaleItem = Backbone.View.extend({
  tagName: "li",
  className: "item vehicle-sale group",

  template: JST["vehicle_sales/item"],

  events: {
    "click .title": "showModel"
  },

  render: function() {

    this.$el.html(this.template({ sale: this.model }));
    this.$el.attr("data-id", this.model.id + "");

    return this;
  },

  showModel: function() {
    HemmingsClone.PopUps.showVehicleSale(this.model)
  }

})

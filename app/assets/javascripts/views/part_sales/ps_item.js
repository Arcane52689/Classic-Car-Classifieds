HemmingsClone.Views.PartSalesItem = Backbone.View.extend({
  template: JST["part_sales/item"],
  tagName: "li",
  render: function() {
    this.$el.html(this.template({ part_sale: this.model }));
    return this;
  }
})

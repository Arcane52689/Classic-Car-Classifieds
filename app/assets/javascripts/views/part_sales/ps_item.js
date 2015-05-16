HemmingsClone.Views.PartSalesItem = Backbone.View.extend({
  template: JST["part_sales/item"],
  tagName: "li",
  className: "item part-sale",
  render: function() {
    this.$el.html(this.template({ sale: this.model }));
    return this;
  }
})

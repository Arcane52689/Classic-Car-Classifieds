HemmingsClone.Views.PartSaleShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST["part_sales/show"],

  render: function() {
    this.$el.html(this.template({ part_sale: this.model }));
    return this;
  }
})

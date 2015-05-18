HemmingsClone.Views.VehicleSaleShow = Backbone.CompositeView.extend({
  className: "show group",
  tagName: "article",
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["vehicle_sales/show"],

  render: function() {
    this.$el.html( this.template({vehicle_sale: this.model }));
    this.imagesView = new HemmingsClone.Views.ImageCarousel({
      list: this.model.images()
    })
    this.addSubview(".images-section",this.imagesView)
    return this;
  },
})

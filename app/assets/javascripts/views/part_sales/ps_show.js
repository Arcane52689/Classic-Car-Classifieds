HemmingsClone.Views.PartSaleShow = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .close": "close"
  },

  template: JST["part_sales/show"],

  render: function() {
    this.$el.html(this.template({ part_sale: this.model }));
    this.imagesView = new HemmingsClone.Views.ImageCarousel({
      list: this.model.images()
    })
    this.addSubview(".images-section",this.imagesView)
    return this;
  },

  close: function() {
    this.remove();
    $("#pop-up").addClass("inactive");
  }
})

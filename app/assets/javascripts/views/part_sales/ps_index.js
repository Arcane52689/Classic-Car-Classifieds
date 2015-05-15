HemmingsClone.Views.PartSalesIndex = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },
  className: "results-page group",
  template: JST["static/results"],

  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(part_sale) {
      var view = new HemmingsClone.Views.PartSalesItem({ model: part_sale });
      this.addSubview(".results", view);
    }.bind(this));
    return this;
  }

})

HemmingsClone.Views.PartSalesIndex = Backbone.CompositeView.extend({
  initialize: function() {
    debugger
    this.listenTo(this.collection, "sync", this.render);
  },
  className: "results-page group",
  template: JST["static/results"],

  render: function() {
    this.$el.html(this.template());
      debugger
    this.collection.each(function(part_sale) {
      var view = new HemmingsClone.Views.PartSalesItem({ model: part_sale });
      this.addSubview(".results", view);
    }.bind(this));
    return this;
  }

})

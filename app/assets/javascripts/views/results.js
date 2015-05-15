HemmingsClone.Views.Results = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync add sort", this.render);
  }

  className: "results-page",
  template: JST["static/results"],

  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(result) {
      view = new this.collection.view({ sale: result })
      this.addSubview(".results", view)
    }.bind(this))
    return this;
  }


})

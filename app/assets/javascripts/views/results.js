HemmingsClone.Views.Results = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync add sort", this.render);
  },

  className: "results-page group",
  template: JST["static/results"],

  render: function() {
    this.$el.html(this.template());
    this.collection.each(function(result) {
      view = new this.collection.view({ model: result })
      this.addSubview(".results", view)
    }.bind(this))

    return this;
  }


})

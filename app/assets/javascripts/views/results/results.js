HemmingsClone.Views.Results = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sort", this.renderResults);
  },

  events: {
    "click .next": "nextPage"
  },

  className: "results-page group",
  template: JST["static/results"],

  render: function() {
    this.$el.html(this.template());
    console.log("hi")
    this.renderResults();
    this.optionsView = new HemmingsClone.Views.SortOptions({
      collection: this.collection,
      $results: this.$(".results").children()
      });
    this.addSubview(".order-by", this.optionsView);

    return this;
  },

  renderResults: function() {
    console.log("sorting")
    this.subviews(".results").each(function(view) {
      view.remove();
    });
    $(".results").empty();
    this.collection.each(function(result) {
      view = new this.collection.view({ model: result })
      this.addSubview(".results", view)
    }.bind(this))
  },

  nextPage: function() {
    this.collection.searchData.page++;
    this.collection.grab();
  }





})

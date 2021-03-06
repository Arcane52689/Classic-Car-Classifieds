HemmingsClone.Views.Results = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.collection, "sync remove", this.renderResults);
    this.listenTo(this.collection, "sort", this.renderResults);
    if (options) {
      this.isSearch = options.isSearch
    }
  },



  className: "results-page group",
  template: JST["static/results"],

  render: function() {

    this.$el.html(this.template());
    var pagesView = new HemmingsClone.Views.PagesView({
      collection: this.collection
    });
    this.addSubview("#pages", pagesView);
    this.renderResults();

    if (!this.optionsView) {
      this.renderSortOptions();
    }

    return this;
  },

  renderResults: function() {

    this.subviews(".results").each(function(view) {
      view.remove();
    });
    $(".results").empty();

    this.collection.each(function(result) {
      view = new this.collection.view({ model: result })
      this.addSubview(".results", view)
    }.bind(this))
  },



  renderSortOptions: function() {
    this.optionsView = new HemmingsClone.Views.SortOptions({
      collection: this.collection,
      $results: this.$(".results").children(),
      isSearch: this.isSearch
      });
    this.addSubview(".order-by", this.optionsView);
  }





})

HemmingsClone.Views.Results = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.renderResults);
    this.listenTo(this.collection, "sort", this.renderResults);
  },

  events: {
    "click .next": "nextPage",
    "click .prev": "prevPage"
  },

  className: "results-page group",
  template: JST["static/results"],

  render: function() {

    this.$el.html(this.template({
      page: this.collection.searchData.page,
      pages: this.collection.pages()
    }));

    this.renderResults();

    if (!this.optionsView) {
      this.renderSortOptions();
    }


    console.log(this.subviews());
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

  nextPage: function() {

    if (this.collection.searchData.page < this.collection.pages ){
      this.collection.searchData.page++;
      this.collection.grab();
    }

  },

  prevPage: function() {
    if (this.collection.searchData > 1 ) {
      this.collection.searchData.page--;
      this.collection.grab();
    }
  },

  renderSortOptions: function() {
    this.optionsView = new HemmingsClone.Views.SortOptions({
      collection: this.collection,
      $results: this.$(".results").children()
      });
    this.addSubview(".order-by", this.optionsView);
    debugger
  }





})

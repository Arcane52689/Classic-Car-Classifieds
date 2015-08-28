HemmingsClone.Views.PagesView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render)
  },

  events: {
    "click .next": "nextPage",
    "click .prev": "prevPage"
  },

  tagName: "nav",

  className: "results-nav group",

  template: JST["results/pages"],

  render: function() {
    this.$el.html(this.template({
      pages: this.collection.pages(),
      page: this.collection.searchData.page
    }));
    return this;
  },

  nextPage: function() {
    if (this.collection.searchData.page < this.collection.pages() ){
      this.collection.searchData.page++;
      this.collection.grab();
    }

  },

  prevPage: function() {
    
    if (this.collection.searchData.page > 1 ) {
      this.collection.searchData.page--;
      this.collection.grab();
    }
  }
})

HemmingsClone.Views.SearchBox = Backbone.CompositeView.extend({
  initialize: function(options) {

  },
  tagName: "section",
  className: "search",

  events: {
    "submit form": "search",
    "click .search-option": "select"
  },

  template: JST["static/search"],

  render: function() {
    this.$el.html(this.template({}));
    return this;
  },

  search: function(event) {
    event.preventDefault();
    var data = $(event.currentTarget).serializeJSON();
    console.log(data);
  },

  select: function(event) {
    event.preventDefault();
    $(".search-option").removeClass('selected')
    var $li = $(event.currentTarget);
    if ($li.attr("id") === "part_sales") {
      $("#part-search").removeClass("inactive")
    }
    else {
      $("#part-search").removeClass("inactive").addClass("inactive")
    }
    $li.addClass("selected");
  }

})

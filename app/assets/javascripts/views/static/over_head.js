HemmingsClone.Views.OverHead = Backbone.CompositeView.extend({
  initialize: function() {

  },

  tagName: "nav",

  className: "overhead group",

  events: {
    "click .link": "visit"
  },


  template: JST["static/over_head"],

  render: function() {
    this.$el.html(this.template())
    var search = new HemmingsClone.Views.SearchBox();
    this.addSubview("#search", search);
    search.setUpRefresh();
    return this;
  },


  visit: function(event) {
    event.preventDefault();
    var $li = $(event.currentTarget);
    var link = $li.find("a").attr("href");
    Backbone.history.navigate(link, { trigger: true });
  }

})

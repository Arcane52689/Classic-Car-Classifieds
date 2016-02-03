HemmingsClone.Views.OverHead = Backbone.CompositeView.extend({
  initialize: function() {
    this.newImages();
    setTimeout(this.newImages.bind(this), 30000);
  },

  tagName: "div",

  className: "overhead group",

  events: {
    // "click .link": "visit"
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
  },

  newImages: function() {
    $.ajax({
      url: "api/vehicle_sales/random_image",
      data: {
        count: 4
      },
      dataType: "json",
      success: function(resp) {
        for (var i = 1; i < 5; i++) {
          this.$("#" + i).attr("src", resp.image_urls[i - 1]);

        }
      }.bind(this),
      error: function(resp) {
        // this.$("#1").attr("src",resp.responseText);
      }.bind(this)
    })
  }

})

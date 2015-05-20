HemmingsClone.Views.SearchBox = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.newImage()
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
    var view = new HemmingsClone.Views.MakeModelForm({
      collection: new HemmingsClone.Collections.Vehicles({
        make: "None"
      })
    });
    this.addSubview("#make-and-model", view)
    return this;
  },

  search: function(event) {
    event.preventDefault();
    var data = $(event.currentTarget).serialize();

    if (this.$(".selected").attr("id") ===("part_sales") ) {
      Backbone.history.navigate("search/part_sales/"+data, {trigger: true})
    }
    else {
      Backbone.history.navigate("search/vehicle_sales/"+data, {trigger: true});
    }


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
  },

  newImage: function() {
    $.ajax({
      url: "api/vehicle_sales/random_image",
      dataType: "json",
      success: function(resp) {
        this.$("#0").attr("src",resp.image_url);
      }.bind(this),
      error: function(resp) {
        this.$("#1").attr("src",resp.responseText);
      }.bind(this)
    })
  },

  setUpRefresh: function() {
    setInterval(this.newImage.bind(this), 60000)
  }

})

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
    var view = new HemmingsClone.Views.MakeModelForm({
      collection: new HemmingsClone.Collections.Vehicles({
        make: "Toyota"
      })
    });
    this.addSubview("#make-and-model", view)
    return this;
  },

  search: function(event) {
    event.preventDefault();
    var data = $(event.currentTarget).serialize();
    // $.ajax({
    //   url: "/api/vehicle_sales/search",
    //   data: data,
    //   dataType: 'json',
    //   success: function(resp) {
    //     console.log(resp)
    //     var results = new HemmingsClone.Collections.VehicleSaleResults();
    //     results.set(resp, {parse: true})
    //     var view = new HemmingsClone.Views.Results({
    //       collection: results
    //     })
    //     $("#main").html(view.render().$el);
    //   }
    // })
    Backbone.history.navigate("search/vehicle_sales/"+data, {trigger: true});
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

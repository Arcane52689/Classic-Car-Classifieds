HemmingsClone.Views.SearchBox = Backbone.CompositeView.extend({
  initialize: function(options) {
    // this.newImage()
  },
  tagName: "section",
  className: "search",

  events: {
    "submit form": "search",
    "click .search-option": "select",
    "click .title": "toggleSearch"
  },

  template: JST["static/search"],

  render: function() {
    this.$el.html(this.template({}));
    var view = new HemmingsClone.Views.VehicleInfoForm({
      isSearch: true
    })

    this.addSubview("#make-and-model", view);
    this.renderCategories();

    this.turnOffAutoComplete();
    return this;
  },

  turnOffAutoComplete: function() {
    this.$("input").attr("autocomplete", "off");
  },

  renderCategories: function() {
    var view = new HemmingsClone.Views.DropdownSearch({
      name: "part_sale[part_category]",
      placeholder: "Part Category",
      list: window.PART_CATEGORIES
    });
    this.addSubview(".part-categories", view);
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
    // setInterval(this.newImage.bind(this), 120000)
  },

  toggleSearch: function(event) {
    event.preventDefault();
    if (this.transitioning) {
      return
    }
    this.transitioning = true;
    if (this.$el.is('.minified')) {
      this.unMinify();
    } else {
      this.minify();
    }

  },

  minify: function() {
    this.$el.one("transitionend", function() {
      this.$("form").toggleClass("inactive");
      this.transitioning = false;
    }.bind(this));
    this.$el.toggleClass("minified");
  },

  unMinify: function() {
    this.$("form").toggleClass("inactive");
    this.$el.one("transitionend", function() {
      this.transitioning = false;
    }.bind(this));
    this.$el.toggleClass("minified");
  }

})

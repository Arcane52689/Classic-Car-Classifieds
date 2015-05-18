HemmingsClone.Views.ImageCarousel = Backbone.View.extend({
  initialize: function(options) {
    this.list = options.list;
  },

  events: {
    "click li":"changeImage"
  },

  tagName: "section",
  className: "image-carousel",

  template: JST["shared/image_selector"],

  render: function() {
    debugger
    this.$el.html(this.template({list: this.list}));
    return this;
  },

  changeImage: function(event) {
    event.preventDefault();
    var id = $(event.currentTarget).data("id");
    this.$("#big-img").attr("src", this.list[id])
  }
})

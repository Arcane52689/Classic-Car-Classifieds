HemmingsClone.Views.PartSaleShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
    if (options) {
      this.popup = options.popup
    }
  },
  tagName: "article",
  className: "show group",

  events: {
    "click .close": "close",
    "click .contact-user": "fetchUserData"
  },

  template: JST["part_sales/show"],

  render: function() {
    this.$el.html(this.template({
       part_sale: this.model,
       popup: this.popup
       }));
    this.imagesView = new HemmingsClone.Views.ImageCarousel({
      list: this.model.images()
    })
    this.addSubview(".images-section",this.imagesView)
    return this;
  },

  close: function() {
    this.remove();
    $("#pop-up").addClass("inactive");
  },

  fetchUserData: function() {

    if (!HemmingsClone.mustLogIn) {

      var that = this;
      $.ajax({
        url: "api/users/"+ that.model.get("user_id") + "/email",
        dataType: "json",
        success: function(response) {
          that.model._user = response.email;
          that.render();
        }
      })
    }
  }
})

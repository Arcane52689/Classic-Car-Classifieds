HemmingsClone.Views.VehicleSaleShow = Backbone.CompositeView.extend({
  className: "show group",
  tagName: "article",
  initialize: function() {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .close": "close",
    "click .contact-user": "fetchUserData"
  },

  template: JST["vehicle_sales/show"],

  render: function() {

    this.$el.html( this.template({vehicle_sale: this.model }));

    this.imagesView = new HemmingsClone.Views.ImageCarousel({
      list: this.model.images()
    })
    this.addSubview(".images-section",this.imagesView)
    return this;
  },

  close: function(event) {
    event.preventDefault();
    this.remove()
    $("#pop-up").addClass("inactive");
  },

  fetchUserData: function() {
    if (!HemmingsClone.mustLogIn) {

      var that = this;
      $.ajax({
        url: "api/users/"+ that.model.get("user_id") + "/email",
        dataType: "json",
        success: function(response) {
          that.model._user = response.email
          that.render()
        }
      })
    }
  }
})

HemmingsClone.Views.VehicleSaleShow = Backbone.CompositeView.extend({
  className: "show group",
  tagName: "article",
  initialize: function(options) {
    this.listenTo(this.model, "sync", this.render)
    if (options) {
      this.popup= options.popup
    }
  },

  events: {
    "click .close": "close",
    "click .contact-user": "fetchUserData",
    "click .visit": "visit"
  },

  template: JST["vehicle_sales/show"],

  render: function() {

    this.$el.html( this.template({
      vehicle_sale: this.model,
      popup: this.popup
      }));

    this.imagesView = new HemmingsClone.Views.ImageCarousel({
      list: this.model.images()
    })
    this.addSubview(".images-section",this.imagesView)
    return this;
  },

  close: function(event) {

    event && event.preventDefault();
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
  },

  visit: function(event) {
    if (this.popup) {
      this.close();

    }
  }
})

window.HemmingsClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');

    HemmingsClone.currentUser = new HemmingsClone.Models.User({})

    this.router = new HemmingsClone.Routers.Router({
      $rootEl: $("#main")
    });
    this.router = new HemmingsClone.Routers.PopUps({
      $rootEl: $("#pop-up")
    })

    HemmingsClone.renderBase()
    HemmingsClone.checkForUser()
    Backbone.history.start();
  },


  renderBase: function() {
    this.header = new HemmingsClone.Views.Header();
    $(".header").html(this.header.render().$el)
  },

  checkForUser: function() {
    $.ajax({
      url: "/api/session/active_user",
      type: "GET",
      dataType: "json",
      success: function(response) {
        console.log("hi");
        console.log(response);
        HemmingsClone.currentUser.set("email", response.email)
      },
      error: function(response) {
        console.log(response);
      }
    })

  }
};

// $(document).ready(function(){
//   HemmingsClone.initialize();

// });

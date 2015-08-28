window.HemmingsClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');

    HemmingsClone.currentUser = new HemmingsClone.Models.User({})

    var baseRouter = new HemmingsClone.Routers.Router({
      $rootEl: $("#main")
    });
    var popUprouter = new HemmingsClone.Routers.PopUps({
      $rootEl: $("#pop-up")
    });

    var PartSalesRouter = new HemmingsClone.Routers.PartSalesRouter({
      $rootEl: $("#main")
    });

    var VehicleSalesRouter = new HemmingsClone.Routers.VehicleSalesRouter({
      $rootEl: $("#main")
    });

    this.SearchRouter = new HemmingsClone.Routers.SearchRouter();

    HemmingsClone.renderBase();
    HemmingsClone.checkForUser();
    Backbone.history.start();
  },


  renderBase: function() {
    this.header = new HemmingsClone.Views.Header();
    $(".header").html(this.header.render().$el);

    this.overHead = new HemmingsClone.Views.OverHead();
    $("#over-head").html(this.overHead.render().$el);
    // this.searchBox.setUpRefresh();

    HemmingsClone.Flash = new HemmingsClone.Models.Flasher();
    this.flashView = new HemmingsClone.Views.Flashes({
      model: HemmingsClone.Flash
    });
    $("#flash").html(this.flashView.render().$el);
  },

  checkForUser: function() {
    $.ajax({
      url: "/api/session/active_user",
      type: "GET",
      dataType: "json",
      success: function(response) {
        HemmingsClone.currentUser.set(response);
        HemmingsClone.PopUps.mustAddEmail();
      }
    })

  }
};

// $(document).ready(function(){
//   HemmingsClone.initialize();

// });

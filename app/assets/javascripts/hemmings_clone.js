window.HemmingsClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    this.currentUser = new HemmingsClone.Models.User({})
    this.router = new HemmingsClone.Routers.Router({
      $rootEl: $("#main")
    });
    this.router = new HemmingsClone.Routers.PopUps({
      $rootEl: $("#pop-up")
    })
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   HemmingsClone.initialize();
// });

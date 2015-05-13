window.HemmingsClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    this.router = new HemmingsClone.Routers.Router({
      $rootEl = "#main"
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  HemmingsClone.initialize();
});

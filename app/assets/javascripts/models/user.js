HemmingsClone.Models.User = Backbone.Model.extend({
  urlRoot:"api/users",

  loggedIn: function() {
    if (this.get("email")) {
      return true;
    }
    return false;
  }
})

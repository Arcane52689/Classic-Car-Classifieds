HemmingsClone.PopUps = {

  signUp: function() {
    var view = new HemmingsClone.Views.SignUpForm({
      model: new HemmingsClone.Models.User()
    })
    $("#pop-up").removeClass("inactive").html(view.render().$el);
  },

  login: function() {
    var view = new HemmingsClone.Views.LoginForm({});
    $("#pop-up").removeClass("inactive").html(view.render().$el);

  },


  showVehicleSale: function(model) {
    model.fetch()
    var view = new HemmingsClone.Views.VehicleSaleShow({
      model: model
    })
    $("#pop-up").removeClass("inactive").html(view.render().$el.addClass("inner-modal"));

  },

  showPartSale: function(model) {
    model.fetch()
    var view = new HemmingsClone.Views.PartSaleShow({
      model: model
    })
    $("#pop-up").removeClass("inactive").html(view.render().$el.addClass("inner-modal"));
  },

  showLookingFor: function(model) {
    model.fetch()
    var view = new HemmingsClone.Views.LookingForShow({
      model: model
    });
    $("#pop-up").removeClass("inactive").html(view.render().$el.addClass("inner-modal"));
  },

  mustLogin: function() {
    if (!HemmingsClone.currentUser.loggedIn()) {
      HemmingsClone.PopUps.login();
      return true
    }
    return false
  },

  mustAddEmail: function() {
    if (HemmingsClone.currentUser.get("email") === "invalid") {
      view = new HemmingsClone.Views.UpdateUser({model: HemmingsClone.currentUser})
      $("#pop-up").removeClass("inactive").html(view.render().$el.addClass("inner-modal"));
    }
  }

}

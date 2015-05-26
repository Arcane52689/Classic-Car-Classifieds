HemmingsClone.Views.LoginForm = Backbone.CompositeView.extend({
  template: JST["auth/login"],
  className: "inner-modal",

  events: {
    "click .close": "close",
    "submit form": "submit",
    "click .signup":"signup"
  },

  render: function() {
    this.$el.html(this.template());
    var omniView = new HemmingsClone.Views.OmniView()
    this.addSubview(".omniauth", omniView)
    return this;
  },


  close: function() {
    $("#pop-up").addClass("inactive");
    this.remove();
    // Backbone.history.navigate("");
  },

  signup: function() {
    event.preventDefault()

    this.close()
    HemmingsClone.PopUps.signUp()
  },

  submit: function(event) {
    event.preventDefault();
    var $form = $(event.currentTarget)

    var successCallback = function() {
      HemmingsClone.currentUser.set("email",$form.find("#email").val())
      this.close()
    }.bind(this);

    var errorCallback = function() {
      this.render().$el.prepend("Invalid username/password Combo");
    }.bind(this);
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: $form.serialize(),
      success: successCallback,
      error: errorCallback
    });
  }
})

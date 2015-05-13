HemmingsClone.Views.LoginForm = Backbone.View.extend({
  template: JST["auth/login"],

  events: {
    "click .close": "close",
    "submit form": "submit"
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },


  close: function() {
    this.remove();
    Backbone.history.navigate("");
  },

  submit: function(event) {
    // debugger
    event.preventDefault();
    var $form = $(event.currentTarget)

    var successCallback = function() {
      HemmingsClone.currentUser.set("email",$form.find("#email").val())
      this.close()
    }.bind(this);

    var errorCallback = function() {
      this.render().$el.prepend("Invalid username/password Combo");
    }.bind(this);
    console.log($form.serialize())
    $.ajax({
      url: "/api/session",
      type: "POST",
      data: $form.serialize(),
      success: successCallback,
      error: errorCallback
    });
  }
})

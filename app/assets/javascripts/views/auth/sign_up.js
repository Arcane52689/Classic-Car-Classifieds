HemmingsClone.Views.SignUpForm = Backbone.CompositeView.extend({
  events: {
    "submit form": "submit",
    "click .close": "close",
    "click .login": "login"
  },

  template: JST["auth/sign_up"],
  className: "inner-modal",

  render: function() {
    this.$el.html(this.template({ user: this.model }));
    var omniView = new HemmingsClone.Views.OmniView()
    this.addSubview(".omniauth", omniView)
    return this;
  },

  emailsMatch: function(){
    return (this.$("#email").val() === this.$("#email-confirm"))
  },

  submit: function(event) {
    event.preventDefault();
    var $form = $(event.currentTarget);
    var email = $form.find("#email").val();
    if (this.emailsMatch) {
      $.ajax({
        url: "/api/users/",
        type: "POST",
        dataType: "json",
        data: $form.serialize(),
        success: function() {
          HemmingsClone.currentUser.set("email", email);
          this.close();
          // Backbone.history.navigate("", {trigger: true});
        }.bind(this)
      })
    }
    else {
      this.render();
    }
  },

  close: function(event) {
    this.remove()
    $("#pop-up").addClass("inactive")
  },

  login: function(event) {
    event.preventDefault()
    this.close()
    HemmingsClone.PopUps.login()
  },

})

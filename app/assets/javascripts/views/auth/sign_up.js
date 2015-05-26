HemmingsClone.Views.SignUpForm = Backbone.CompositeView.extend({
  events: {
    "submit form": "submit",
    "click .close": "close",
    "click .login": "login",
    "change #confirm-email": "checkEmails"
  },

  template: JST["auth/sign_up"],
  className: "inner-modal",

  render: function() {
    this.$el.html(this.template({ user: this.model }));
    var omniView = new HemmingsClone.Views.OmniView({
      callback: this.close.bind(this)
    });
    this.addSubview(".omniauth", omniView);
    return this;
  },

  emailsMatch: function(){
    return (this.$("#email").val() === this.$("#confirm-email").val())
  },

  checkEmails: function(event) {
    event.preventDefault()
    debugger
    if (this.emailsMatch()) {
      this.$(".emails-dont-match").removeClass("inactive").addClass("inactive");
      this.$(".emails-match").removeClass("inactive");
    }
    else {
      this.$(".emails-match").removeClass("inactive").addClass("inactive");
      this.$(".emails-dont-match").removeClass("inactive");
    }
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
        }.bind(this)
      })
    }
    else {
      this.render();
    }
  },

  close: function(event) {
    event.preventDefault();
    this.remove();
    $("#pop-up").addClass("inactive");
  },

  login: function(event) {
    event.preventDefault();
    this.close();
    HemmingsClone.PopUps.login();
  },

})

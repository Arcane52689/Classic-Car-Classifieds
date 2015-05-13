HemmingsClone.Views.SignUpForm = Backbone.View.extend({
  events: {
    "submit form": "submit",
    "click .close": "close"
  },

  template: JST["auth/sign_up"],

  render: function() {
    this.$el.html(this.template({ user: this.model }));
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
          Backbone.history.navigate("", {trigger: true});
        }
      })
    }
    else {
      this.render();
    }
  },

  close: function(event) {
    event.preventDefault();
    this.remove()
  }

})

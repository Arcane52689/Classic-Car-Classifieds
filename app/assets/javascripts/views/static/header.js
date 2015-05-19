HemmingsClone.Views.Header = Backbone.View.extend({
  initialize: function() {
    this.listenTo(HemmingsClone.currentUser, "change:email", this.render);
  },

  events: {
    "click .logout": "logout",
    "click .signup": "signup",
    "click .login": "login"
  },

  tagName: "nav",

  template: JST["static/header"],

  render: function() {
    this.$el.addClass("links group")
    this.$el.html(this.template({user: HemmingsClone.currentUser }));
    return this;
  },

  logout: function(event) {
    event.preventDefault();
    $.ajax({
      url: "/api/session/",
      type: "DELETE",
    })
    HemmingsClone.currentUser.set("email",undefined);
  },

  login: HemmingsClone.PopUps.login,
  signup: HemmingsClone.PopUps.signUp
})

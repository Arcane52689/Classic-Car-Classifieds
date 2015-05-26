HemmingsClone.Views.OmniView = Backbone.View.extend({
  tagName: 'ul',
  className: 'omni-auth group',
  events: {
    "click .dummy": "dummyLogin"
  },

  template: JST["auth/omni_auth"],

  render:function() {

    this.$el.html(this.template());
    return this;
  },

  dummyLogin: function() {
    $.ajax({
      url: "api/session/dummy",
      success: function(response) {
        HemmingsClone.currentUser.set(response)
      }
    })
  }


})

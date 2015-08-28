HemmingsClone.Views.OmniView = Backbone.View.extend({
  initialize: function(options) {
    this.callback = options.callback
  },
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

  dummyLogin: function(event) {
    event.preventDefault();
    $.ajax({
      url: "api/session/dummy",
      success: function(response) {
        HemmingsClone.currentUser.set(response);
        this.callback();
      }.bind(this)
    })
  }


})

HemmingsClone.Views.OmniView = Backbone.View.extend({
  tagName: 'ul',
  className: 'omni-auth group',
  events: {

  },

  template: JST["auth/omni_auth"],

  render:function() {
    debugger
    this.$el.html(this.template());
    return this;
  }

})

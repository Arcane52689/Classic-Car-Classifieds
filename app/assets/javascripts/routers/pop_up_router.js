HemmingsClone.Routers.PopUps = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "sign_up": "signUp",
    "login": "login"
  },

  signUp: function() {
    var view = new HemmingsClone.Views.SignUpForm({
      model: new HemmingsClone.Models.User()
    })
    this._swapView(view);
  },

  login: function() {
    var view = new HemmingsClone.Views.LoginForm({});
    this._swapView(view)
  },

  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this.$rootEl.removeClass("inactive")
    this._currentView = view;
    HemmingsClone.Flash.clearMessages();
    
    this.$rootEl.html(view.render().$el);
  }


  })

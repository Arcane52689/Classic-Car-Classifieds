HemmingsClone.Models.Flasher = Backbone.Model.extend({

  parse: function(resp) {
    this.setMessages(resp)
    return resp
  },

  messages: function() {
    if (!this._messages) {
      this._messages =  {}
    }
    return this._messages
  },

  setMessages: function(obj) {
    this._messages = obj;
    console.log(this._messages)
    debugger
    this.trigger("flash")

  },

  clearMessages: function() {
    this.trigger("flash")
    this._messages = {}
  }
})

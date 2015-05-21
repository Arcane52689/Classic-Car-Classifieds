HemmingsClone.Views.LookingForForm = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  template: JST["looking_fors/form"],

  tagName: "form",

  className: "new-form",

  events: {
    "submit": "submit"
  },

  render: function() {
    this.$el.html(this.template({ request: this.model }))
    var view = new HemmingsClone.Views.MakeModelForm({
      collection: new HemmingsClone.Collections.Vehicles({
        make: "None"
      })
    })
    this.addSubview("#make-model", view)
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    this.model.save(data, {
      success: function() {
        HemmingsClone.currentUser.lookingFors().add(this.model, {merge: true});
        Backbone.history.navigate("my-listings", {trigger: true});
      }.bind(this),

      error: function(obj, response) {
        if (this._errors) {
          this._errors.remove();
        }

        this._errors = new HemmingsClone.Views.ErrorList({
          errorList: JSON.parse(response.responseText)
        })

        this.addSubview(".errors", this._errors);
      }.bind(this)

    })
  }

})

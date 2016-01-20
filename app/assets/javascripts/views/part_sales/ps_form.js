HemmingsClone.Views.PartSaleForm = Backbone.CompositeView.extend({
  initialize: function(options) {

  },

  className: "request-form part-sale",

  events: {
    "submit form": "submit",
    "click .add-image": "addImage"
  },

  template: JST["part_sales/new"],

  render: function() {
    this.$el.html(this.template({part_sale: this.model}));
    var view = new HemmingsClone.Views.MakeModelForm({
      collection: new HemmingsClone.Collections.Vehicles({
        make: "None"
      })
    })
    this.addSubview("#make-model",view)
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    if (!HemmingsClone.PopUps.mustLogin()) {

      var $form = $(event.currentTarget);
      var data = $form.serializeJSON();
      this.model.save(data, {
        success: function(){
          this.collection.add(this.model);
          Backbone.history.navigate("", {trigger: true});
          HemmingsClone.PopUps.showPartSale(this.model);
        }.bind(this),

        error: function(obj, response) {
          HemmingsClone.Flash.setMessages(response.responseJSON)
        }.bind(this)
      })
    }
  },

  addImage: function(event) {
    event.preventDefault();
    var view = new HemmingsClone.Views.AddImage({model:this.model})
    this.addSubview(".uploaded", view);
  }



})

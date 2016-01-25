HemmingsClone.Views.PartSaleForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.imageCount = 0;
  },

  className: "request-form part-sale",

  events: {
    "submit form": "submit",
    "click .add-image": "addImage"
  },

  template: JST["part_sales/new"],

  render: function() {
    this.$el.html(this.template({part_sale: this.model}));
    // var view = new HemmingsClone.Views.MakeModelForm({
    //   collection: new HemmingsClone.Collections.Vehicles({
    //     make: "None"
    //   })
    // })
    var view = new HemmingsClone.Views.VehicleInfoForm()
    this.addSubview("#make-model",view);
    this.renderCategories();
    return this;
  },

  renderCategories: function() {
    var view = new HemmingsClone.Views.DropdownSearch({
      name: "part_sale[part_category]",
      placeholder: "Part Category",
      list: window.PART_CATEGORIES
    });
    this.addSubview(".part-categories", view);
  },

  submit: function(event) {
    event.preventDefault();
    if (!HemmingsClone.PopUps.mustLogin()) {

      var $form = $(event.currentTarget);
      var data = $form.serializeJSON();
      debugger
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
    this.imageCount += 1;
    var view = new HemmingsClone.Views.AddImage({model:this.model, name: "image-" + this.imageCount});
    this.addSubview(".uploaded", view);
  }



})

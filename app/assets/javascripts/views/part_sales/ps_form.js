HemmingsClone.Views.PartSaleForm = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.imageCount = 0;
    this.valid = true;
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
    this.valid = true;
    if (!HemmingsClone.PopUps.mustLogin()) {
      this.checkInputs();
      this.checkTextAreas();
      this.checkSelects();
      if (!this.valid) {
        return false;
      }
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
    this.imageCount += 1;
    var view = new HemmingsClone.Views.AddImage({model:this.model, name: "image-" + this.imageCount});
    this.addSubview(".uploaded", view);
  },

  checkInputs: function() {
    var $input
    this.$("input").each(function(index, input ){
      $input = $(input);
      $input.removeClass("valid").removeClass("invalid");
      if ($input.val().length === 0) {
        $input.addClass("invalid");
        this.valid = false;
      } else {
        $input.addClass("valid");
      }
    }.bind(this));
  },

  checkTextAreas: function() {
    var $textArea
    this.$("textarea").each(function(index, textarea ){
      $textarea = $(textarea);
      $textarea.removeClass("valid").removeClass("invalid");
      if ($textarea.val().length === 0) {
        $textarea.addClass("invalid");
        this.valid = false;
      } else {
        $textarea.addClass("valid");
      }
    }.bind(this));
  },

  checkSelects: function() {
    var $select
    // debugger
    this.$("select").each(function(index, select ){
      $select = $(select);
      $select.removeClass("valid").removeClass("invalid");
      if ($select.val() === "None") {
        $select.addClass("invalid");
        this.valid = false;
      } else {
        $select.addClass("valid");
      }
    }.bind(this));
  }



})

HemmingsClone.Views.AddImage = Backbone.View.extend({
  initialize: function(options) {
    this.name = options.name
  },
  events: {
    "change input": "fileInputChange",
    "click .remove": "close"
  },
  tagName: "li",
  className: "image-form",
  template: JST["static/add_image"],

  render: function() {
    this.$el.html(this.template({
      name: this.name
    }));
    return this;
  },

  fileInputChange: function(event) {


    var that = this;
    var file = event.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
      that._updatePreview(reader.result);
      that.model.images().push(reader.result)
      that.image = reader.result
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      that.updatePreview("");
      that.model.images().remove(that.image);
    }

  },

  _updatePreview: function(src) {
    this.$el.find(".img-preview").attr('src',src);
  },

  close: function() {
    this.remove();
    this.model.images().spilice(this.model.images().indexOf(image),1);

  }
})

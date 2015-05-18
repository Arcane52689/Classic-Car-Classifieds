HemmingsClone.Views.AddImage = Backbone.View.extend({

  events: {
    "change input": "fileInputChange",
    "click .close": "close"
  },

  template: JST["static/add_image"],

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  fileInputChange: function(event) {
    console.log(event.currentTarget.files[0]);

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
    this.model.images().remove(image);

  }
})

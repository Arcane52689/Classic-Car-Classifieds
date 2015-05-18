class Image < ActiveRecord::Base
  belongs_to :user

  belongs_to :imageable, polymorphic: true;

    has_attached_file :picture, styles: { thumb:"100 x 100" }, default_url: "missing.png"
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end

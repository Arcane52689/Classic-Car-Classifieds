class Image < ActiveRecord::Base
  belongs_to :user

  belongs_to :imageable, polymorphic: true;
  attr_accessor :picture

  has_attached_file :picture, styles: { thumb:"100 x 100" }, default_url: "missing.png"



  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/

end

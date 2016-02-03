class Image < ActiveRecord::Base
  belongs_to :user

  belongs_to :imageable, polymorphic: true;
  attr_accessor :picture

  has_attached_file :picture, styles: { thumb:"100 x 100" }, default_url: "missing.png"



  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/



  def self.random_id
    last_id = Image.last.id
    id = rand(1..last_id)
    return id if Image.exists?(id: id)
    return Image.random()
  end

  def self.random_pictures(count)
    ids = [];
    while ids.length < count
      id = self.random_id
      ids << id unless ids.include?(id)
    end
    Image.where("id in (?)",ids).map { |image| image.picture.url }.shuffle
  end


end

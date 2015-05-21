
class VehicleSale < ActiveRecord::Base
  belongs_to :user
  belongs_to :vehicle

  has_many :images, as: :imageable
  has_many :matches, as: :matchable
  

  validates :title_status, :vehicle_description, :vehicle_condition, :location, presence: true


  def create_images(image_list)
    image_list.each do |img|
      self.images.new({picture: img})
    end
  end

end

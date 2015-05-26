
class VehicleSale < ActiveRecord::Base
  belongs_to :user
  belongs_to :vehicle

  has_many :images, as: :imageable
  has_many :matches, as: :matchable


  validates :title_status, :vehicle_description, :vehicle_condition, :location, :chasis_number, presence: true
  validate :valid_vehicle
  after_save :find_matches

  def create_images(image_list)
    image_list.each do |img|
      self.images.new({picture: img})
    end
  end


  def find_matches
    results = LookingFor.where(for_part: false, vehicle_id: vehicle_id)
    results.each do |looking_for|
      self.matches.create(looking_for_id: looking_for.id)
    end
  end

  def valid_vehicle
    unless vehicle_id
      puts vehicle_id, "Is vehicle_id"
      errors[:vehicle_id] << "Must select vehicle"
    end
  end

end

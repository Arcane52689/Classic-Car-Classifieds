class PartSale < ActiveRecord::Base

  PART_CATEGORIES= [
    "Body Electrical",
    "Body Mechanical",
    "Brake",
    "Clutch",
    "Carburetion",
    "Climate Control",
    "Cooling System",
    "Diesel Injection",
    "Drive Belts",
    "Engine Electrical",
    "Engine Mechanical",
    "Driveshaft &  Axle",
    "Exhaust",
    "Fuel Delivery",
    "Fuel Injection",
    "Manual/Misc",
    "Steering",
    "Suspension",
    "Transmission"
  ]

  PART_TYPES = [
    "Generator",
    "Belt",
    "Engine",
    "Circuit",
    "Brake Shoes",
    "Wheel",
    "Tire",
    "Bumper"
  ]

  def self.categories
    PART_CATEGORIES
  end

  def self.types
    PART_TYPES
  end


  belongs_to :user

  has_many :part_taggings,
    class_name: "PartTagging",
    foreign_key: :part_number,
    primary_key: :part_number

  has_many :vehicles,
    through: :part_taggings,
    source: :vehicle

  has_many :images, as: :imageable

  has_many :matches, as: :matchable



  validates :part_number, :part_category, :part_type, :part_description, :location, :user_id, presence: true

  def create_images(image_list)
    image_list.each do |img|
      self.images.new({picture: img})
    end
  end




end

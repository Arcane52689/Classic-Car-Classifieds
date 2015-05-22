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

  SEED_HASH= [
    "Body Electrical" => [
      "Window switch",
      "relay",
      "ciruit",
      "wiper-motor"
      ],
    "Body Mechanical" =>
      %w(bumper wheel tire door door-handle),
    "Brake" =>
      %w( brake-pads brake-shoes brake-drums wheel-cylinder caliper),
    "Clutch" =>
      %w( clutch-kit master-cylinder slave-cylinder fluid o-ring pedal),
    "Carburetion" =>
      %w( needle carburetor cleaner ),
    "Climate Control" =>
      %w( ac-kit ),
    "Cooling System" =>
      %w(radiator hose clamp water-pump drive-belt),
    "Drive Belts" =>
      %w( altenator-belt serpentine-belt tensioner ),
    "Engine Electrical" =>
      %w( alternator generator starter solenoid sensor),
    "Engine Mechanical" =>
      %w( block timing-belt timing-chain intake-valves exhaust-valves),
    "Driveshaft &  Axle" =>
      %w( driveshaft axle),
    "Exhaust" =>
      %w( muffler pipe),
    "Fuel Delivery" =>
      %w( fuel-pump fuel-line fuel-tank ),
    "Fuel Injection" =>
      %w( fuel-injector),
    "Steering" =>
      %w( steering-column steering-wheel ),
    "Suspension" =>
      %w( shock strut control-arm balljoint bushing),
    "Transmission" =>
      %w( solenoid gear synchro o-ring)
  ]





  def self.categories
    PART_CATEGORIES
  end

  def self.types(category)
    SEED_HASH[category]
  end


  belongs_to :user

  has_many :part_taggings,
    class_name: "PartTagging",
    foreign_key: :part_number,
    primary_key: :part_number

  has_many :vehicles,
    through: :part_taggings,
    source: :vehicle

  has_many :images, as: :imageable, dependent: :destroy

  has_many :matches, as: :matchable, dependent: :destroy



  validates :part_number, :part_category, :part_type, :part_description, :location, :user_id, presence: true

  after_save :find_matches

  def create_images(image_list)
    image_list.each do |img|
      self.images.new({picture: img})
    end
  end


  def match_by_vehicle
    results = LookingFor.where(for_part: true).where("vehicle_id IN (?) AND ( (part_type = ?) OR (part_type IS NULL))", self.vehicles.map(&:id), part_type)
    results.each do |result|
      self.matches.create(looking_for_id: result.id)
    end

  end


  def match_by_part_number
    results = LookingFor.where(part_number: part_number)
    results.each do |result|
      self.matches.create(looking_for_id: result.id)
    end
  end

  def find_matches
    match_by_part_number
    match_by_vehicle
  end



end

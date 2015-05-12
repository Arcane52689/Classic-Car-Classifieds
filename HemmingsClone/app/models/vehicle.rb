class Vehicle < ActiveRecord::Base

  CONDITIONS = %w(Excellent Fair Good Mint Project)

  has_many :vehicle_sales

  validates :make, :year, :model, presence: true

  # validate :is_unique?

  def self.conditions
    return CONDITIONS
  end

  def self.find_or_create(params)
    vehicle = Vehicle.find_by(params)
    return vehicle if vehicle
    return Vehicle.create!(params)
  end




  def is_unique?
    vehicle = Vehicle.where(make: make).where(year: year).where(model: model).all
    if vehicle
      self.errors[:base] << "Vehicle already exists in database"
    end
  end

  def description
    "#{self.year} #{self.make} #{self.model}"
  end

end

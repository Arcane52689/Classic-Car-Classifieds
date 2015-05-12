class Vehicle < ActiveRecord::Base



  validates :make, :year, :model, presence: true

  validate :is_unique?


  def self.find_or_create(params)
    vehicle = Vehicle.find_by(params)
    return vehicle if vehicle
    return vehicle.create(params)
  end




  def is_unique?
    vehicle = Vehicle.where(make: make).where(year: year).where(model: model).all
    if vehicle
      self.errors << "Vehicle already exists in database"
    end
  end

end

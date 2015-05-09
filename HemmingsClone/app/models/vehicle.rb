class Vehicle < ActiveRecord::Base



  validates :make, :year, :model, presence: true

  validate :is_unique?




  def is_unique?
    vehicle = Vehicle.where(make: make).where(year: year).where(model: model).all
    if vehicle
      self.errors << "Vehicle already exists in database"
    end
  end

end

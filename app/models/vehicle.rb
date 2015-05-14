class Vehicle < ActiveRecord::Base

  CONDITIONS = %w(Excellent Fair Good Mint Project)
  MAKES = [
    "Mercedes Benz",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Austin",
    "Austin-Healey",
    "Bentley",
    "BMW",
    "Cadillac",
    "Cheverolet",
    "Chrystler",
    "Citroen",
    "Datsun",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "Harley-Davidson",
    "Honda",
    "Hummer",
    "Jaguar",
    "Lamborghini",
    "Lincoln",
    "Lotus",
    "Maserati",
    "Mazda",
    "Mercury",
    "MG",
    "Mini",
    "Morgan",
    "Nissan",
    "Oldsmobile",
    "Packard",
    "Pierce-Arrow",
    "Plymouth",
    "Pontiac",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Saab",
    "Shelby",
    "Studebaker",
    "Triumph",
    "Toyota",
    "Volkeswagen",
    "Volvo"
  ]

  has_many :vehicle_sales

  validates :make, :year, :model, presence: true

  # validate :is_unique?

  def self.conditions
    return CONDITIONS
  end

  def self.makes
    return MAKES
  end

  def self.find_or_create(params)
    vehicle = Vehicle.find_by(params)
    return vehicle if vehicle
    return Vehicle.create!(params)
  end

  def self.random_make_model
    params = {}
    params[:make] = MAKE_MODELS.keys.shuffle.first
    params[:model] = MAKE_MODELS[params[:make]].shuffle.first
    params[:year] = (1950..1980).shuffle.first
    return Vehicle.find_or_create(params)
  end





  # def is_unique?
  #   vehicle = Vehicle.where(make: make).where(year: year).where(model: model).all
  #   if vehicle
  #     self.errors[:base] << "Vehicle already exists in database"
  #   end
  # end

  def description
    "#{self.year} #{self.make} #{self.model}"
  end

end

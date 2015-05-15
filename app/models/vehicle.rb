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

  has_many :part_taggings

  has_many :part_sales, through: :part_taggins, source: :part_sale

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

  def self.random
    id = rand(1..80541)
    return id if Vehicle.exists?(id: id)
    return Vehicle.random_vehicle
  end

  def self.clean_year(year)
    if year.to_i > 1890 || year.to_i < 2050
      return year.to_i
    else
      return nil
  end

  def self.clean_params(params)
    params[:year_start] = Vehicle.clean_year(params[:year_start]) || 1890
    params[:year_end] = Vehicle.clean_year(params[:year_end]) || 2050
    params[:model] = nil if params[:model] == "NONE"
  end


  def self.search_by(params, method)]
    params = Vehicle.clean_params(params)
    results = Vehicle.includes(method => :vehicles).where("year BETWEEEN ? AND ?", params[:year_start], params[:year_end])
    if params[:model]
      results = results.where(model: params[:model])
    end

    return results.map(&method).flatten

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



Vehicle.makes.each do |make|
  make_file_txt = make.split.join('_').downcase+".txt"
  make_file_path = Rails.root.join("lib","assets", "models", make_file_txt)
  File.foreach(make_file_path) do |line|
    model = line.chomp

    (1930..2015).each do |year|
      Vehicle.find_or_create({
        make: make,
        year: year,
        model: model
        })
    end

    Vehicle.find_or_create({
      make: make,
      year: 0,
      model: model,
    })
  end
end

40.times do |user|
  User.create!({email:Faker::Internet.email, password:"password"})
end
#
users = User.all
descriptions = VehicleSale.all.map(&:vehicle_description)
last_vehicle_id = Vehicle.last.id
#
#

Vehicle.all.each do |vehicle|
  params = {
    vehicle_id: vehicle.id,
    user_id: users.shuffle.first.id,
    chasis_number: SecureRandom.hex(),
    title_status: "clean",
    vehicle_condition: Vehicle.conditions.shuffle.first,
    vehicle_description: descriptions.shuffle.first,
    location: Faker::Address.zip
  }
  vs = VehicleSale.create!(params)
  vs.images.create!(picture: File.open(image_path) )

  category = PartSale.categories.shuffle.first
  params = {
    user_id: rand(1..5),
    part_number: SecureRandom.hex(8),
    part_category: category,
    part_type: PartSale.types(category).shuffle.first || "none",
    location: Faker::Address.zip,
    price: rand(25..1000),
    part_description: ["Mildly used", "Fresh out of box", "brand new", "new", "still in box"].shuffle.first
  }
  ps = PartSale.create(params)
  ps.part_taggings.create({vehicle_id: vehicle.id})

#
  path = Rails.root.join("app/assets/images/cars/")

10.times do
  params = {
    vehicle_id: Vehicle.random(last_vehicle_id),
    user_id: users.shuffle.first.id,
    chasis_number: SecureRandom.hex(),
    title_status: "clean",
    vehicle_condition: Vehicle.conditions.shuffle.first,
    vehicle_description: descriptions.shuffle.first,
    location: Faker::Address.zip
  }

  vs = VehicleSale.create!(params)
  image_path = path.join("#{vs.vehicle.year / 10 * 10}/" "#{rand(1..10)}.jpg")
  vs.images.create!(picture: File.open(image_path) )
end

1000.times do
  category = PartSale.categories.shuffle.first
  params = {
    user_id: rand(1..5),
    part_number: SecureRandom.hex(8),
    part_category: category,
    part_type: PartSale.types(category).shuffle.first || "none",
    location: Faker::Address.zip,
    price: rand(25..1000),
    part_description: ["Mildly used", "Fresh out of box", "brand new", "new", "still in box"].shuffle.first
  }
  p = PartSale.create(params)
  p.part_taggings.create({vehicle_id: Vehicle.random(last_vehicle_id)})
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Vehicle.makes.each do |make|
  make_file_txt = make.split.join('_').downcase+".txt"
  make_file_path = Rails.root.join("lib","assets", "models", make_file_txt)
  File.foreach(make_file_path) do |line|
    model = line.chomp

    # (1930..1985).each do |year|
    Vehicle.find_or_create({
      make: make,
      year: 0,
      model: model,
      })
    # end
  end
end

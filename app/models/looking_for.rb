class LookingFor < ActiveRecord::Base
  belongs_to :user
  belongs_to :vehicle

  has_many :matches, dependent: :destroy

  after_create :find_matches



  def create_vehicle_sale_matches
    results = VehicleSale.where(vehicle_id: vehicle_id)
    results.each do |sale|
      sale.matches.create({ looking_for_id: self.id })
    end
  end

  def create_part_sale_matches
    if part_number
      results = PartSale.where({part_number: part_number } )
    else
      results = PartTagging.includes(:part_sale).where(vehicle_id: vehicle_id).map(&:part_sale)
      if part_type
        results = result.where({ part_type: part_type })
      end
    end
    results.each do |sale|
      sale.matches.create( {looking_for_id: self.id })
    end
  end

  def find_matches
    if for_part
      create_part_sale_matches
    else
      create_vehicle_sale_matches
    end
  end

  def total_matches
    matches.count
  end

  def new_matches
    if last_show
      matches.where("create_at > :time", time: last_shown).count
    else
      total_matches
    end
  end
end

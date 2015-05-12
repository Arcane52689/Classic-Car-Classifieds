class VehicleSale < ActiveRecord::Base
  belongs_to :user
  belongs_to :vehicle

  validates :title_status, :vehicle_description, :vehicle_condition, :location, presence: true
end

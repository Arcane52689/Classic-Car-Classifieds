class VehicleSalesController < ApplicationController

  def new
    
  end

  def create


  end

  def show

  end

  def index

  end
end


def vehicle_params
  params.require(:vehicle).permit(:year, :make, :model)
end


def find_vehicle
  Vehicle.find_or_create(vehicle_params)
end

def vehicle_sale_params
  params.require(:vehicle_sale).permit(:chasis_number, :vehicle_description, :vehicle_condition, :title_status)
end

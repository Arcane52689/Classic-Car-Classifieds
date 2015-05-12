class LookingForsController < ApplicationController

  def new

  end

  def create
    @request = current_user.new(looking_for_params)
    @request.vehicle_id = find_vehicle.id
  end

  def show

  end

  def index

  end

  def looking_for_params
    params.require(:looking_for).permit(:title, :part_number, :part_type, :location, :body)
  end
end

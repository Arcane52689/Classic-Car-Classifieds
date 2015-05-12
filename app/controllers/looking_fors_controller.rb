class LookingForsController < ApplicationController

  def new

  end

  def create
    @request = current_user.new(looking_for_params)
    @request.vehicle_id = find_vehicle.id
    if @request.save
      redirect to looking_fors_url
  end

  def show
    @request = LookingFor.includes(:vehicle).find(params[:id])
  end

  def index
    @requests = current_user.looking_fors.includes(:vehicles)
  end

  def looking_for_params
    params.require(:looking_for).permit(:title, :part_number, :part_type, :location, :body)
  end
end

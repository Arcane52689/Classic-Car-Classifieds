class Api::VehicleModelsController < ApplicationController



  def show
    @vehicles = Vehicle.where({year: 0, make: params[:make]})
    render json: @vehicles
  end

end

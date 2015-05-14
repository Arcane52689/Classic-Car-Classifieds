class Api::VehicleModelsController < ApplicationController



  def show
    @models = Vehicle.where({year: 0, make: params[:make]}).map(&:model)
    render json: @models
  end

end

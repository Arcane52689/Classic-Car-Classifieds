class Api::VehicleSalesController < ApplicationController



  def create
    @vehicle_sale = current_user.vehicle_sales.new(vehicle_sale_params)
    @vehicle_sale.vehicle_id = find_vehicle.id
    if @vehicle_sale.save
      render json: @vehicle_sale
    else
      render json: @vehicle_sale.errors.messages, status: 422
    end
  end

  def show
    @vehicle_sale = VehicleSale.includes(:vehicle).find(params[:id])
  end

  def index
    @vehicle_sales = VehicleSale.all.includes(:vehicle)
  end



  def vehicle_params
    params.require(:vehicle).permit(:year, :make, :model)
  end


  def find_vehicle
    Vehicle.find_or_create(vehicle_params)
  end

  def vehicle_sale_params
    params.require(:vehicle_sale).permit(:chasis_number, :vehicle_description, :vehicle_condition, :title_status, :location)
  end
end

class VehicleSalesController < ApplicationController

  def new

  end

  def create
    @request = current_user.vehicle_sales.new(vehicle_sale_params)
    @request.vehicle_id = find_vehicle.id

    if @request.save
      flash[:success] = "sale has been posted"
      redirect_to vehicle_sales_url
    else
      render :new
    end
  end

  def show
    @request = VehicleSale.includes(:vehicle).find(params[:id])
  end

  def index
    @requests = VehicleSale.all.includes(:vehicle)
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

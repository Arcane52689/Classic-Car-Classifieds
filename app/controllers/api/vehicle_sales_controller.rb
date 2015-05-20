

class Api::VehicleSalesController < ApplicationController
  wrap_parameters false


  def create

    @vehicle_sale = current_user.vehicle_sales.new(vehicle_sale_params)
    @vehicle_sale.vehicle_id = find_vehicle.id

    @vehicle_sale.create_images(params[:vehicle_sale][:images]) if params[:vehicle_sale][:images]
    if @vehicle_sale.save
      render json: @vehicle_sale
    else
      render json: @vehicle_sale.errors.full_messages, status: 422
    end
  end

  def show
    @vehicle_sale = VehicleSale.includes(:vehicle).find(params[:id])
  end

  def index
    @vehicle_sales = Search.filter(VehicleSale.joins(:vehicle).all.includes(:vehicle, :images).order(params[:sortBy]), params).page(params[:page])
    @pages = @vehicle_sales.total_pages

  end

  def search
    # fail
    @vehicle_sales = Search.filter(Search.new(search_params).search_vehicle_sales, params)
    @pages = @vehicle_sales.total_pages

    render :index
  end


  def vehicle_params
    params.require(:vehicle_sale).require(:vehicle).permit(:year, :make, :model)
  end


  def find_vehicle
    Vehicle.find_or_create(vehicle_params)
  end

  def vehicle_sale_params
    params.require(:vehicle_sale).require(:vehicle_sale).permit(:chasis_number, :vehicle_description, :vehicle_condition, :title_status, :location, :price)
  end

  def search_params
    params.require(:vehicle).permit(:year_start,:year_end, :make, :model)
  end

end

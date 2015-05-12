class PartSalesController < ApplicationController

  def new

  end

  def create
    @request = current_user.part_sales.new(part_sale_params)
    @request.part_taggings.new({ vehicle_id: find_vehicle.id })
    if @request.save
      redirect_to part_sales_url
    else
      # flash[:errors] = @request.errors.full_messages
      render :new
    end

  end

  def show
    @request = PartSale.includes(:vehicles).find(params[:id])
  end

  def index
    @requests = PartSale.includes(:vehicles).all
  end


  def part_sale_params
    params.require(:part_sale).permit(:part_description, :location, :part_type, :part_number)
  end



end
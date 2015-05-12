class PartSalesController < ApplicationController

  def new

  end

  def create
    @request = current_user.partsales.new(part_sale_params)
    @request.part_taggings.new({ vehicle_id: find_vehicle.id })
    if @request.save
      redirect_to part_sales_url
    else
      flash[:errors] = @request.errors.full_messages
      render :new
    end

  end

  def show
    @request = PartSale.includes(:vehicle).find(params[:id])
  end

  def index
    @requests = PartSale.includes(:vehicle).all
  end


  def part_sale_params
    params.require(:part_sale).permit(:description, :location, :part_type, :part_number)
  end



end

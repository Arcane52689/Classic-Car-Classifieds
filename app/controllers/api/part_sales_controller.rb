class Api::PartSalesController < ApplicationController



  def create
    @part_sale = current_user.part_sales.new(part_sale_params)
    @part_sale.part_taggings.new({ vehicle_id: find_vehicle.id })
    if @part_sale.save
      render json: @part_sale
    else
      # flash[:errors] = @part_sale.errors.full_messages
      render json: @part_sale.errors.full_messages
    end

  end

  def show
    @part_sale = PartSale.includes(:vehicles).find(params[:id])
  end

  def index
    @part_sales = PartSale.includes(:vehicles).all
  end

  def search
    @part_sales = Search.new(search_params).search_part_sales
    # puts(@part_sales)
    # fail
    render :index
  end


  def part_sale_params
    params.require(:part_sale).permit(:part_description, :location, :part_type, :part_number)
  end

  def search_params
    params.require(:vehicle).permit(:year_start,:year_end,:make,:model).merge(params.require(:part_sale).permit(:part_number, :part_category, :part_type))
  end

end


class Search
  attr_accessor :params


  def initialize(params)
    @params = params
  end


  def self.filter(relation, params)
    result = relation
    if params[:makes]
      result = relation.where("vehicles.make IN (?)", params[:makes])
    end
    if params[:models]
      result = relation.where("vehicles.model IN (?)", params[:models] )
    end
    result
  end


  def clean_year(year)
    if year.to_i > 1935 && year.to_i < 2010
      return year.to_i
    else
      return nil
    end
  end

  def clean_params
    self.params[:year_start] = clean_year(self.params[:year_start]) || 1890
    self.params[:year_end] = clean_year(self.params[:year_end]) || 2050
    self.params[:model] = nil if self.params[:model] == "None"
    self.params[:part_category] = nil if self.params[:part_category] == "None"
    self.params[:part_type] = nil if self.params[:part_type] == ""
    self.params[:part_number] = nil if self.params[:part_number] == ""
  end



  def search_vehicle_sales
    self.clean_params
    results = VehicleSale.joins(:vehicle).where("vehicles.year BETWEEN ? AND ?", self.params[:year_start], self.params[:year_end]).where("vehicles.make = ?", self.params[:make]).includes(:vehicle)

    if self.params[:model]
      results = results.where("vehicles.model=?",self.params[:model])
    end

    return results
  end

  def search_part_sales
    self.clean_params
    results = PartSale.joins(:vehicles).where("vehicles.year BETWEEN ? AND ?", self.params[:year_start], self.params[:year_end]).where("vehicles.make = ?", self.params[:make]).includes(:vehicles)

    if self.params[:model]
      results = results.where("vehicles.model=?",self.params[:model])
    end



    [:part_number, :part_category, :part_type].each do |sym|

      if self.params[sym]
        results = results.where({ sym => self.params[sym] })
      end
    end
    return results

  end




end

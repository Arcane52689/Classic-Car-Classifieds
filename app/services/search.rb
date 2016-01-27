
class Search
  attr_accessor :params





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

  def self.vehicle_sales(params)
    Search.new(params).search_vehicle_sales
  end



  def initialize(params)
    @params = params
  end

  def clean_year(year)
    if year.to_i > 1935 && year.to_i < 2015
      return year.to_i
    else
      return nil
    end
  end

  def clean_params
    self.params[:year_start] = clean_year(self.params[:year_start]) || 1890
    self.params[:year_end] = clean_year(self.params[:year_end]) || 2050
    self.params[:make] = nil if self.params[:make] == "None"
    self.params[:model] = nil if self.params[:model] == "None"
    self.params[:part_category] = nil if self.params[:part_category] == "None"
    self.params[:part_type] = nil if self.params[:part_type] == ""
    self.params[:part_number] = nil if self.params[:part_number] == ""
  end



  def search_vehicle_sales
    self.clean_params
    results = VehicleSale.joins(:vehicle).where("vehicles.year BETWEEN ? AND ?", self.params[:year_start], self.params[:year_end]).includes(:vehicle)

    if self.params[:make]
      result = results.where("vehicles.make = ?", self.params[:make])
    end

    if self.params[:model]
      results = results.where("vehicles.model=?",self.params[:model])
    end

    return results
  end

  def search_part_sales
    self.clean_params
    results = PartSale.joins(:vehicles).where("vehicles.year BETWEEN ? AND ?", self.params[:year_start], self.params[:year_end]).includes(:vehicles)

    if self.params[:make]
      results = results.where("vehicles.make=?",self.params[:make])

    end

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

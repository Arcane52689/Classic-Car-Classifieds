class AddColumnLookingFors < ActiveRecord::Migration
  def change
    add_column :looking_fors, :for_part, :boolean, default: false
  end
end

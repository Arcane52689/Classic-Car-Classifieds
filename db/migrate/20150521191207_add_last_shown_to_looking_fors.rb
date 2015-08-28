class AddLastShownToLookingFors < ActiveRecord::Migration
  def change

    add_column :looking_fors, :last_shown, :datetime

  end
end

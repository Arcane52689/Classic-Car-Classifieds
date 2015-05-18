class DropUsersFromImages < ActiveRecord::Migration
  def change
    remove_column :images, :user_id
  end
end

class CreateOmniLogins < ActiveRecord::Migration
  def change
    create_table :omni_logins do |t|
      t.references :user, index: true, foreign_key: true
      t.string :uid, null: false
      t.string :provider, null: false

      t.timestamps null: false
    end

    add_index :omni_logins, [:provider, :uid], unique: true
  end
end

class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.references :user, index: true, foreign_key: true
      t.string :token, null: false, index: true

      t.timestamps null: false
    end
  end
end

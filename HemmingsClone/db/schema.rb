# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150512153223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sessions", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "token",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sessions", ["token"], name: "index_sessions_on_token", using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "vehicle_sales", force: :cascade do |t|
    t.string   "chasis_number",       null: false
    t.string   "vehicle_description", null: false
    t.string   "vehicle_condition",   null: false
    t.string   "title_status",        null: false
    t.integer  "user_id"
    t.integer  "vehicle_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
  end

  add_index "vehicle_sales", ["user_id"], name: "index_vehicle_sales_on_user_id", using: :btree
  add_index "vehicle_sales", ["vehicle_id"], name: "index_vehicle_sales_on_vehicle_id", using: :btree

  create_table "vehicles", force: :cascade do |t|
    t.string   "make",       null: false
    t.string   "model",      null: false
    t.integer  "year",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "vehicles", ["make", "year", "model"], name: "index_vehicles_on_make_and_year_and_model", unique: true, using: :btree
  add_index "vehicles", ["make"], name: "index_vehicles_on_make", using: :btree
  add_index "vehicles", ["model"], name: "index_vehicles_on_model", using: :btree
  add_index "vehicles", ["year"], name: "index_vehicles_on_year", using: :btree

  add_foreign_key "sessions", "users"
  add_foreign_key "vehicle_sales", "users"
  add_foreign_key "vehicle_sales", "vehicles"
end
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_02_07_041836) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dependences", primary_key: "dependence_id", force: :cascade do |t|
    t.string "dependence_name"
    t.string "dependence_description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", primary_key: "employee_id", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "address"
    t.string "phone_number"
    t.string "email"
    t.date "hire_date"
    t.bigint "position_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["position_id"], name: "index_employees_on_position_id"
  end

  create_table "jobs", primary_key: "jobs_id", force: :cascade do |t|
    t.string "position"
    t.date "date_start"
    t.date "date_end"
    t.bigint "employee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_jobs_on_employee_id"
  end

  create_table "positions", primary_key: "position_id", force: :cascade do |t|
    t.string "position_name"
    t.string "position_description"
    t.bigint "dependence_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dependence_id"], name: "index_positions_on_dependence_id"
  end

  create_table "trainings", primary_key: "training_id", force: :cascade do |t|
    t.string "training_name"
    t.string "training_description"
    t.bigint "employee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_trainings_on_employee_id"
  end

  add_foreign_key "employees", "positions", primary_key: "position_id"
  add_foreign_key "jobs", "employees", primary_key: "employee_id"
  add_foreign_key "positions", "dependences", primary_key: "dependence_id"
  add_foreign_key "trainings", "employees", primary_key: "employee_id"
end

class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees, primary_key: :employee_id do |t|
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :address
      t.string :phone_number
      t.string :email
      t.date :hire_date
      t.references :position, foreign_key: { to_table: :positions, primary_key: :position_id }


      t.timestamps
    end
  end
end

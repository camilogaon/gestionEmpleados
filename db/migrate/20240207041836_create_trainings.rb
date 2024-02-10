class CreateTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :trainings, primary_key: :training_id do |t|
      t.string :training_name
      t.string :training_description
      t.references :employee, foreign_key: { to_table: :employees, primary_key: :employee_id }, on_delete: :cascade 

      t.timestamps
    end
  end
end

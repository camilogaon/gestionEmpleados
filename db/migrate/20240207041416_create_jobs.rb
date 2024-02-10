class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs, primary_key: :jobs_id do |t|
      t.string :position
      t.date :date_start
      t.date :date_end
      t.references :employee, foreign_key: { to_table: :employees, primary_key: :employee_id }, on_delete: :cascade 

      t.timestamps
    end
  end
end

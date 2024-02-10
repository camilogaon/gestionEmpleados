class CreateDependences < ActiveRecord::Migration[7.0]
  
  def change
    create_table :dependences, primary_key: :dependence_id do |t|
      t.string :dependence_name
      t.string :dependence_description

      t.timestamps
    end
  end
end

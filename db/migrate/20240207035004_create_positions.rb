class CreatePositions < ActiveRecord::Migration[7.0]
  def change
    create_table :positions, primary_key: :position_id do |t|
      t.string :position_name
      t.string :position_description
      t.references :dependence, foreign_key: { to_table: :dependences, primary_key: :dependence_id }

      t.timestamps
    end
  end
end

class CreateTimers < ActiveRecord::Migration[5.1]
  def change
    create_table :timers do |t|
      t.integer :minutes

      t.timestamps
    end
  end
end

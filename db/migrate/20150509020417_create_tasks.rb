class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.string :title
      t.integer :seq
      t.integer :status
      t.datetime :done_at

      t.timestamps null: false
    end
  end
end

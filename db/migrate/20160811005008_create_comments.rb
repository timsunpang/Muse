class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :track_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :comments, [:track_id, :user_id], unique: true
  end
end

class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :creator_id, null: false
      t.string :title, null: false
      t.string :description

      t.timestamps null: false
    end
    add_index :playlists, :creator_id
  end
end

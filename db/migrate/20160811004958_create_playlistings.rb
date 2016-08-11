class CreatePlaylistings < ActiveRecord::Migration
  def change
    create_table :playlistings do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false

      t.timestamps null: false
    end

    add_index :playlistings, [:track_id, :playlist_id], unique: true
  end
end

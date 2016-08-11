class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.string :artist, null: false
      t.text :description
      t.attachment :thumbnail
      t.string :track_url, null: false

      t.timestamps null: false
    end
    add_index :tracks, :uploader_id
  end
end

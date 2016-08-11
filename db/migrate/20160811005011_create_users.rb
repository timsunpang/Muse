class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :description
      t.attachment :image

      t.timestamps null: false
    end

    add_index :users, [:email, :username, :session_token], unique: true
  end
end

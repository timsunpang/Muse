# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160811005011) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "track_id",   null: false
    t.integer  "user_id",    null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "comments", ["track_id", "user_id"], name: "index_comments_on_track_id_and_user_id", unique: true, using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "track_id",   null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["track_id", "user_id"], name: "index_likes_on_track_id_and_user_id", unique: true, using: :btree

  create_table "playlistings", force: :cascade do |t|
    t.integer  "track_id",    null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlistings", ["track_id", "playlist_id"], name: "index_playlistings_on_track_id_and_playlist_id", unique: true, using: :btree

  create_table "playlists", force: :cascade do |t|
    t.integer  "creator_id",  null: false
    t.string   "title",       null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlists", ["creator_id"], name: "index_playlists_on_creator_id", using: :btree

  create_table "tracks", force: :cascade do |t|
    t.integer  "uploader_id",            null: false
    t.string   "title",                  null: false
    t.string   "artist",                 null: false
    t.text     "description"
    t.string   "thumbnail_file_name"
    t.string   "thumbnail_content_type"
    t.integer  "thumbnail_file_size"
    t.datetime "thumbnail_updated_at"
    t.string   "track_url",              null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "tracks", ["uploader_id"], name: "index_tracks_on_uploader_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "email",              null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.text     "description"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "users", ["email", "username", "session_token"], name: "index_users_on_email_and_username_and_session_token", unique: true, using: :btree

end

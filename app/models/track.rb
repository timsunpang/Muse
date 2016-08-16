# == Schema Information
#
# Table name: tracks
#
#  id                     :integer          not null, primary key
#  uploader_id            :integer          not null
#  title                  :string           not null
#  artist                 :string           not null
#  description            :text
#  thumbnail_file_name    :string
#  thumbnail_content_type :string
#  thumbnail_file_size    :integer
#  thumbnail_updated_at   :datetime
#  track_url              :string           not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class Track < ActiveRecord::Base
  validates :uploader_id, :title, :artist, :track_url, presence: true

  belongs_to :user
  has_many :playlistings, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :playlists, through: :playlistings
end

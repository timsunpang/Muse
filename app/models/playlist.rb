# == Schema Information
#
# Table name: playlists
#
#  id          :integer          not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlist < ActiveRecord::Base
  validates :creator_id, :title, presence: true

  belongs_to :creator, class_name: "User"
  has_many :playlistings, dependent: :destroy
  has_many :tracks, through: :playlistings
end

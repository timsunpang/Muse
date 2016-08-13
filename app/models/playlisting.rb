# == Schema Information
#
# Table name: playlistings
#
#  id          :integer          not null, primary key
#  track_id    :integer          not null
#  playlist_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Playlisting < ActiveRecord::Base
  validates :playlist_id, :track_id, presence: true

  belongs_to :track
  belongs_to :playlist
end

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
end

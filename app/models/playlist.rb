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
end

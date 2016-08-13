# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base
  validates :user_id, :track_id, presence: true

  belongs_to :track
  belongs_to :user
end

# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  track_id   :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
end

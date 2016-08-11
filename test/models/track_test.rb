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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

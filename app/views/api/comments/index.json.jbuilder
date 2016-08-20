json.array! @comments do |comment|
  json.id comment.id
  json.user_id comment.user_id
  json.track_id comment.track_id
  json.body comment.body
  json.created_at comment.created_at.strftime('%e %b %Y %H:%M:%S%p')

  json.user do
    json.id comment.user.id
    json.username comment.user.username
    json.image_file_name comment.user.image_file_name
  end

  json.track do
    json.id comment.track.id
    json.user_id comment.track.user_id
    json.total_comments comment.track.comments.length
  end
end
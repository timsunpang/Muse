json.id @user.id
json.username @user.username
json.email @user.email
json.profile_pic @user.profile_pic
json.summary @user.summary
json.cover_photo @user.cover_photo
json.created_at @user.created_at

json.photos @user.photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.photo_url photo.photo_url
end

json.favorited_photos @user.favorited_photos do |favorited_photo|
  json.id favorited_photo.id
  json.user_id favorited_photo.user_id
  json.title favorited_photo.title
  json.description favorited_photo.description
  json.photo_url favorited_photo.photo_url
  json.total_favorites favorited_photo.favorites.length

  json.user do
    json.username favorited_photo.user.username
  end
end

json.followees @user.followees do |followee|
  json.id followee.id
  json.username followee.username
  json.profile_pic followee.profile_pic
  json.cover_photo followee.cover_photo
end
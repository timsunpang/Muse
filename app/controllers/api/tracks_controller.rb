class Api::TracksController < ApplicationController
  def index
    @tracks = Track.includes(:user, :playlists, :likes)
    if (params[:currentUserId])
      @tracks = @tracks.where(user_id: params[:currentUserId])
    end
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      redirect_to root_url
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  # def show
  #   @Track = Track.includes(:favorites).find(params[:id])
  # end

  def update
    @track = Track.find(params[:id])
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    render 'index'
  end


  private

  def track_params
    params.require(:track).permit(:uploader_id, :title, :artist, :description, :track_url)
  end

end

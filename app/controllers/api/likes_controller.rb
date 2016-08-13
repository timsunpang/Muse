class Api::LikesController < ApplicationController
  def index
    @likes = Like.includes(:user, :like)
    if (params[:userId])
      @likes = @likes.where(user_id: params[:userId])
    end
  end

  def create
    @like = like.new(like_params)

    if @like.save
      render 'create'
    else
      render json: { errors: @like.errors.full_messages }, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render 'create'
  end


  private

  def like_params
    params.require(:like).permit(:user_id, :track_id)
  end


end

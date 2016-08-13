class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.includes(:user, :track)
    if (params[:trackId])
      @comments = @comments.where(track_id: params[:trackId])
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'create'
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render 'create'
  end


  private

  def comment_params
    params.require(:comment).permit(:user_id, :track_id, :body)
  end

end

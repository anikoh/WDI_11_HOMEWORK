
class CommentsController < ApplicationController

  def new
    comment = Comment.new
    comment.body = params[:body]
    comment.planet_id = params[:planet_id]
    # comment.user_id = current_user.id
    if comment.save
      redirect_to "/planets/#{params[:planet_id]}" #or {comment.dish_id}
    else
      redirect_to "/planets/#{params[:planet_id]}"
    end
  end

end

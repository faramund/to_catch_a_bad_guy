class BadGuysController < ApplicationController
  before_filter :authenticate_user!
  
  def update
  	bad_guy = BadGuy.first_or_create
  	bad_guy.lat = params[:lat]
	bad_guy.lng = params[:lng]
	
	if bad_guy.save!
	 render json: {
        status:201,
      }
    else
      render json: {
        status:400
      }
    end

  end

  def get
  	bad_guy = BadGuy.first_or_create
	render json: {
        status:201,
        lng: bad_guy.lng,
        lat: bad_guy.lat
    }  
  end

end
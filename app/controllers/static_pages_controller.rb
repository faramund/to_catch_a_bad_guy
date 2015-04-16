class StaticPagesController < ApplicationController
  before_filter :authenticate_user!
  
  def welcome
  end
  def map
  	@lat = 52.402697 
  	@lng = 16.937212
  	@bad_guy = BadGuy.first_or_create
  end

  def map_for_seekers
  	@bad_guy = BadGuy.first_or_create
  end

end
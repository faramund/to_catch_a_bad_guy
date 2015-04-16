class StaticPagesController < ApplicationController
  before_filter :authenticate_user!
  
  def map
  	@lat = 52.402697 
  	@lng = 16.937212
  end

end
class BadGuy < ActiveRecord::Base

	def set_and_save_position!(lat,lng)
		self.lat = lat
		self.lng = lng
		self.save!
	end
end
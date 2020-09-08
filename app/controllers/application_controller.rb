class ApplicationController < ActionController::Base
	rescue_from ActiveRecord::RecordNotFound, with: :not_found 
	rescue_from Exception, with: :not_found
	rescue_from ActionController::RoutingError, with: :not_found

	def raise_not_found
		raise ActionController::RoutingError.new("No route matches #{params[:unmatched_route]}")
	end

	def not_found
		respond_to do |format|
			format.html {
				redirect_to("/pavo/404")
			}
		end
	end

	def error
		respond_to do |format|
			format.html {
				redirect_to("/pavo/500")
			}
		end
	end
end
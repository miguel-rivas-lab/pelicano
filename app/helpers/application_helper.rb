module ApplicationHelper

	def section_class
		"ctr_#{controller.controller_name} view_#{controller.action_name}"
	end

end
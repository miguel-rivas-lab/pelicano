Given('I am on {string} Screen') do |text|
end

And(/^I click #{string}$/) do |text|
	# click_button(text)
end

And("I check each home gallery link:") do |table|
	table.raw.flatten.each do |text, url|
		# step "I click #{text}"
		# step "I see #{url} Screen"
	end
end


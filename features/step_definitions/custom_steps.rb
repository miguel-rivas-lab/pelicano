And("I check each home gallery link:") do |table|
	table.raw.flatten.each do |text, url|
		log(text)
		step "I click #{text}"
		# step "I see ctr_#{url} Screen"
	end
end
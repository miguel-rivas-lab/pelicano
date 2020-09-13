# --------------------------- And I wait for 10 seconds
And(/(?:wait)(?: for)? #{DURATION}/) do |num|
	sleep(num.to_f)
end

# --------------------------- And I wait for keypress
And(/^wait for keypress$/) do
	STDIN.getc
end
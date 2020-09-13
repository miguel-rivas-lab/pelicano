driver = nil
server_path = 'http://localhost:9030'

# --------------------------- Given I start Firefox with Full Screen|VGA|XGA|FHD
Given(/^I start #{BROWSER}(?: with #{SCREEN_SIZE})/) do |browser, screen_size|
	is_fullscreen = screen_size.parameterize == 'full_screen'
	driver = Selenium::WebDriver.for browser.parameterize.to_sym
	
	if is_fullscreen
		driver.manage.window.maximize
	else
		sizes = {
			VGA: {width: 640, height: 480},
			XGA: {width: 1024, height: 768},
			FHD: {width: 1920, height: 1080},
		}
		size = sizes[screen_size.upcase.to_sym]
		driver.manage.window.resize_to(size[:width],size[:height])
		driver.manage.window.move_to(0,0)
	end
end

# --------------------------- And I navigate to "Colibri"
And(/^I navigate to #{QUOTED_STRING}/) do |url|
	driver.navigate.to "#{server_path}/#{url.downcase}"
end

# --------------------------- And I click "DrLogic / About Us"
And(/^I click #{QUOTED_STRING}$/) do |text|
	click_button(text)
end

# --------------------------- Given I release the birds
# Given("I release the birds") do
	# Starting rails server
# end
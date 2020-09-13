Feature: Links
	Background:
		# Given I release the birds
		Given I start Firefox with XGA
		And I navigate to "Guinea"

	Scenario: Links on Portfolio's Home
		And I check each home gallery link:
			| "Walking" | colibri |
		# | "DrLogic / About Us" | colibri |
		And wait for keypress
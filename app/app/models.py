from django.db import models

class Profile(models.Model):
	name			= models.CharField(max_length=25) # portfolio info
	last_name		= models.CharField(max_length=25) # portfolio info
	title			= models.CharField(max_length=25) # frontend developer
	location		= models.CharField(max_length=25) # Washington, DC
	email			= models.EmailField(max_length=100) # for cv generator
	phone_number	= models.CharField(max_length=25) # for cv generator
	website			= models.URLField(max_length=50)
	codepen_user	= models.CharField(max_length=25) # user
	github_user		= models.CharField(max_length=25) # user
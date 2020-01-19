from django.contrib import admin
# from django.urls import include, path
from django.conf.urls import include, url
from . import views
# from django.contrib.staticfiles.urls import staticfiles_urlpatterns

def get_path(app_name, section):
	return 'app/' + app_name + '/' + section

urlpatterns = [
	# ----------- A
	url('caixa/', admin.site.urls),
	# ----------- B
	# ----------- C
	# ----------- D
	url(get_path('drlogic', ''), views.drlogic_home),
	url(get_path('drlogic', 'home'), views.drlogic_home),
	url(get_path('drlogic', 'about'), views.drlogic_about),
	url(get_path('drlogic', 'services'), views.drlogic_services),
	url(get_path('drlogic', 'portfolio'), views.drlogic_portfolio),
	url(get_path('drlogic', 'contact'), views.drlogic_contact),
	url(get_path('drlogic', '404'), views.drlogic_404),
	# ----------- E
	# ----------- F
	# ----------- G
	# ----------- H
	# ----------- I
	# ----------- J
	# ----------- K
	# ----------- L
	# ----------- M
	# ----------- N
	# ----------- O
	# ----------- P
	# ----------- Q
	# ----------- R
	# ----------- S
	# ----------- T
	# ----------- U
	# ----------- V
	# ----------- W
	# ----------- X
	# ----------- Y
	# ----------- Z
	# ----------- 0..9
]

# urlpatterns += staticfiles_urlpatterns()
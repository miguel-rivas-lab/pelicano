from django.contrib import admin
from django.urls import include, path
from app import views

def get_path(app_name, section):
	return 'app/' + app_name + '/' + section

urlpatterns = [
	# ----------- A
	path('caixa/', admin.site.urls),
	# ----------- B
	# ----------- C
	# ----------- D
	path(get_path('drlogic', ''), views.drlogic_home),
	path(get_path('drlogic', 'home'), views.drlogic_home),
	path(get_path('drlogic', 'about'), views.drlogic_about),
	path(get_path('drlogic', 'services'), views.drlogic_services),
	path(get_path('drlogic', 'portfolio'), views.drlogic_portfolio),
	path(get_path('drlogic', 'contact'), views.drlogic_contact),
	path(get_path('drlogic', '404'), views.drlogic_404),
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
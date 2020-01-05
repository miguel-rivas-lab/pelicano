from django.contrib import admin
from django.urls import include, path
from app import views

urlpatterns = [
	# ----------- A
	path('admin/', admin.site.urls),
	# ----------- B
	# ----------- C
	# ----------- D
	path('app/drlogic/', views.drlogic_home_view),
	path('app/drlogic/home', views.drlogic_home_view),
	path('app/drlogic/about', views.drlogic_about_view),
	path('app/drlogic/services', views.drlogic_services_view),
	path('app/drlogic/portfolio', views.drlogic_portfolio_view),
	path('app/drlogic/contact', views.drlogic_contact_view),
	path('app/drlogic/404', views.drlogic_404_view),
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
from django.urls import path
from app_drlogic import views

urlpatterns = [
  path('', views.home_view),
  path('about-us', views.about_us_view),
  path('contact-us', views.contact_us_view),
  path('portfolio', views.portfolio_view),
  path('404', views.response_404_view),

  path('testing', views.testing_view),
]
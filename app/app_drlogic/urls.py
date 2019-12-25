from django.urls import path
from app_drlogic import views

urlpatterns = [
  path('', views.index),
  path('about-us', views.about_us),
  path('contact-us', views.contact_us),
  path('portfolio', views.portfolio),
  path('404', views.response_404),
]
from django.urls import path
from app_drlogic import views

urlpatterns = [
  path('', views.home_view),
  path('test', views.test_view),
]
from django.contrib import admin
from django.urls import include, path
from app_drlogic import urls as drlogic_urls

urlpatterns = [
  path('admin/', admin.site.urls),
  path('app/drlogic/', include(drlogic_urls)),
]
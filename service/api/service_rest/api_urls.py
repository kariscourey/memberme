from django.urls import path

from .api_views import api_service, api_services

urlpatterns = [
    path("services/", api_services, name="api_services"),
    path("services/<int:pk>/", api_service, name="api_service"),
]

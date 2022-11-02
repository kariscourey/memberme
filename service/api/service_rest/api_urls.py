from django.urls import path

from .api_views import (
    api_service,
    api_services,
    api_technicians,

)

urlpatterns = [
    path("services/", api_services, name="api_services"),
    path("technicians/", api_technicians, name="api_technicians"),
    path("services/<int:pk>/", api_service, name="api_service")
]

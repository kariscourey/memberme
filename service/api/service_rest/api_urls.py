from django.urls import path

from .api_views import (
    api_service_appointment,
    api_appointments,
    api_technicians,

)

urlpatterns = [
    path("services/", api_appointments, name="api_appointments"),
    path("technicians/", api_technicians, name="api_technicians"),
    path("services/<int:pk>/", api_service_appointment, name="api_service_appointment")
]

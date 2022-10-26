from django.urls import path

from .api_views import (
    api_appointments,
)

urlpatterns = [
    path("services/", api_appointments, name="api_appointments"),
]

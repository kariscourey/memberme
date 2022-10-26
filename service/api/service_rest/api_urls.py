from django.urls import path

from .api_views import (
    api_appointments,
    api_technicians
)

# TODO verify urls in insomnia
urlpatterns = [
    path("services/", api_appointments, name="api_appointments"),
    path("technicians/", api_technicians, name="api_technicians")
]

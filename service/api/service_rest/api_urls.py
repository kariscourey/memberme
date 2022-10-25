from django.urls import path

from .api_views import (
    api_appointments,
)

# TODO verify urls in insomnia
urlpatterns = [
    path("services/", api_appointments, name="api_appointments"),
]

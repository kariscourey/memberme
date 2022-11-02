from django.urls import path

from .views import (
    api_employee,
    api_employees,
    api_position,
    api_positions,
)

urlpatterns = [
    path(
        "employees/",
        api_employees,
        name="api_employees",
    ),
    path(
        "employees/<int:pk>/",
        api_employee,
        name="api_employee",
    ),
    path(
        "positions/",
        api_positions,
        name="api_positions",
    ),
    path(
        "positions/<int:pk>/",
        api_position,
        name="api_position",
    ),
]

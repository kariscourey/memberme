from django.urls import path

from .views import (
    api_employee,
    api_employees,
    api_position,
    api_positions,
    api_technicians,
    api_sales_people,
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
    path(
        "employees/technicians/",
        api_technicians,
        name="api_technicians",
    ),
    path(
        "employees/sales_people/",
        api_sales_people,
        name="api_sales_people",
    ),
]

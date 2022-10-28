from django.urls import path

from .api_views import (
    api_sales,
    api_customer,
    api_sales_person,
)

urlpatterns = [
    path("sales/", api_sales, name="api_sales"),
    path("customers/", api_customer, name="api_customer"),
    path("sales_people/", api_sales_person, name="api_sales_person"),
]

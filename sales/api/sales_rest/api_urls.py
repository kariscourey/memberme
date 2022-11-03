from django.urls import path

from .api_views import (
    api_sales,
    api_customer,
)

urlpatterns = [
    path("sales/", api_sales, name="api_sales"),
    path("customers/", api_customer, name="api_customer"),
]

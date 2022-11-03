from django.urls import path

from .api_views import (
    api_sales,
)

urlpatterns = [
    path("sales/", api_sales, name="api_sales"),
]

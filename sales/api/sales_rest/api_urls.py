from django.urls import path

from .api_views import api_sale, api_sales

urlpatterns = [
    path("sales/", api_sales, name="api_sales"),
    path("sales/<int:pk>/", api_sale, name="api_sales"),
]

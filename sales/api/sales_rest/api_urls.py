from django.urls import path

from .api_views import (
    api_sales,
    # api_sale,
    api_customer,
    api_sales_person,
)

# TODO verify urls in insomnia
urlpatterns = [
    path("sales/", api_sales, name="api_sales"),
    # path("sales/<int:pk>/", api_sale, name="api_sale"),
    path("customers/", api_customer, name="api_customer"),
    path("sales_people/", api_sales_person, name="api_sales_person"),
]

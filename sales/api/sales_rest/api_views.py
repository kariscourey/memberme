from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .encoders import (
    SalesPersonEncoder,
    CustomerEncoder,
    SaleEncoder,
)
from .models import AutomobileVO, Sale, SalesPerson, Customer
import json


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {'sales': sales},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            automobile_vin = content["automobile"]
            automobile_href = f"/api/automobiles/{automobile_vin}/"
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid automobile vin'},
                status=400,
            )

        try:
            sales_person_employee_number = content["sales_person"]
            sales_person = SalesPerson.objects.get(employee_number=sales_person_employee_number)
            content["sales_person"] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid sales person employee number'},
                status=400,
            )

        try:
            customer_phone_number = content["customer"]
            customer = Customer.objects.get(phone_number=customer_phone_number)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid customer phone number'},
                status=400,
            )

        sale = Sale.objects.create(**content)

        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_sales_person(request):

    if request.method == "GET":
        sales_people = SalesPerson.objects.all()
        return JsonResponse(
            {'sales_people': sales_people},
            encoder=SalesPersonEncoder,
        )

    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)

        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_customer(request):

    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {'customers': customers},
            encoder=CustomerEncoder,
        )

    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)

        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

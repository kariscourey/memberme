from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import AutomobileVO, Sale, SalesPerson, Customer
from common.json import ModelEncoder
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "color",
        "year",
        "vin",
        "model_id",
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "automobile",
        "sales_person",
        "customer",
        ]

    encoders = {
            "automobile": AutomobileVOEncoder(),
            "sales_person": SalesPersonEncoder(),
            "customer": CustomerEncoder(),
        }



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

@require_http_methods(["POST"])
def api_sales_person(request):
    content = json.loads(request.body)
    sales_person = SalesPerson.objects.create(**content)

    return JsonResponse(
        sales_person,
        encoder=SalesPersonEncoder,
        safe=False,
    )

@require_http_methods(["POST"])
def api_customer(request):
    content = json.loads(request.body)
    customer = Customer.objects.create(**content)

    return JsonResponse(
        customer,
        encoder=Customer,
        safe=False,
    )

# @require_http_methods(["GET", "PUT", "DELETE"])
# def api_sale(request, pk):
#     if request.method == "GET":
#         sale = Sale.objects.get(id=pk)
#         return JsonResponse(
#             {'sale': sale},
#             encoder=SaleEncoder,
#             safe=False,
#         )
#     elif request.method == "PUT":
#         content = json.loads(request.body)

#         try:
#             if "automobile" in content:
#                 automobile_href = f"/api/sales/{pk}/"
#                 automobile = AutomobileVO.objects.get(import_href=automobile_href)
#                 content["automobile"] = automobile
#         except AutomobileVO.DoesNotExist:
#             return JsonResponse(
#                 {'message': 'Invalid automobile id'},
#                 status=400,
#             )

#         try:
#             if "sales_person" in content:
#                 sales_person_href = f"/api/sales/{pk}/"
#                 sales_person = SalesPerson.objects.get(import_href=sales_person_href)
#                 content["sales_person"] = sales_person
#         except SalesPerson.DoesNotExist:
#             return JsonResponse(
#                 {'message': 'Invalid sales person id'},
#                 status=400,
#             )

#         try:
#             if "customer" in content:
#                 customer_href = f"/api/sales/{pk}/"
#                 customer = Customer.objects.get(import_href=customer_href)
#                 content["customer"] = customer
#         except Customer.DoesNotExist:
#             return JsonResponse(
#                 {'message': 'Invalid customer id'},
#                 status=400,
#             )

#         Sale.objects.filter(id=pk).update(**content)

#         sale = Sale.objects.get(id=pk)
#         return JsonResponse(
#             sale,
#             encoder=SaleEncoder,
#             safe=False,
#         )
#     else:
#         count, _ = Sale.objects.filter(id=pk).delete()
#         return JsonResponse({"deleted": count > 0})

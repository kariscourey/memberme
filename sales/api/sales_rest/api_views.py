from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .encoders import (
    CustomerEncoder,
    SaleEncoder,
)
from .models import AutomobileVO, Sale, Customer, EmployeeVO, CustomerVO
import json

# TODO finish implementation of CustomerVO HERE (and in service)


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
                {'message': 'Invalid automobile VIN'},
                status=400,
            )

        try:
            sales_person_employee_number = content["sales_person"]
            sales_person = EmployeeVO.objects.get(employee_number=sales_person_employee_number)
            content["sales_person"] = sales_person
        except EmployeeVO.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid sales person employee number'},
                status=400,
            )

        try:
            customer_phone_number = content["customer"]
            customer = CustomerVO.objects.get(phone_number=customer_phone_number)
            content["customer"] = customer
        except CustomerVO.DoesNotExist:
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


# @require_http_methods(["GET", "POST"])
# def api_customer(request):

#     if request.method == "GET":
#         customers = Customer.objects.all()
#         return JsonResponse(
#             {'customers': customers},
#             encoder=CustomerEncoder,
#         )

#     else:
#         content = json.loads(request.body)
#         customer = Customer.objects.create(**content)

#         return JsonResponse(
#             customer,
#             encoder=CustomerEncoder,
#             safe=False,
#         )

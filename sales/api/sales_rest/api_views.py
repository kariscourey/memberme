from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .encoders import (
    SaleEncoder,
)
from .models import AutomobileVO, Sale, EmployeeVO, CustomerVO
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

        # TODO update to sold=True on backend
        # TODO full CRUD

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

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

        # TODO figure out update sold to True
        # try:
        #     automobile_vin = content["automobile"]["vin"]
        #     # set body where sold = True
        #     # make POST request
        #     # api_automobile(request, vin)

        #     # something like this?
        #     # Automobile.objects.filter(vin=automobile_vin).update(sold=True)
        # except AutomobileVO.DoesNotExist:
        #     return JsonResponse(
        #         {'message': 'Invalid automobile VIN'},
        #         status=400,
        #     )

        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            sale = Sale.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)

            if "sales_person" in content:
                try:
                    sales_person_employee_number = content["sales_person"]
                    sales_person = EmployeeVO.objects.get(employee_number=sales_person_employee_number)
                    content["sales_person"] = sales_person
                except EmployeeVO.DoesNotExist:
                    return JsonResponse(
                        {'message': 'Invalid sales person employee number'},
                        status=400,
                    )
            if "customer" in content:
                try:
                    customer_phone_number = content["customer"]
                    customer = CustomerVO.objects.get(phone_number=customer_phone_number)
                    content["customer"] = customer
                except CustomerVO.DoesNotExist:
                    return JsonResponse(
                        {'message': 'Invalid customer phone number'},
                        status=400,
                    )

            sale = Sale.objects.get(id=pk)

            props = ["price", "customer", "sales_person"]
            for prop in props:
                if prop in content:
                    setattr(sale, prop, content[prop])
            sale.save()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response

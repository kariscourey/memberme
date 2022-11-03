from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    EmployeeEncoder,
    PositionEncoder,
)
from .models import Employee, Position


@require_http_methods(["GET", "POST"])
def api_employees(request):
    if request.method == "GET":
        employees = Employee.objects.all()
        return JsonResponse(
            {"employees": employees},
            encoder=EmployeeEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            position_id = content["position"]
            position = Position.objects.get(id=position_id)
            content["position"] = position

            employee = Employee.objects.create(**content)

            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create employee"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_employee(request, pk):
    if request.method == "GET":
        try:
            employee = Employee.objects.get(id=pk)
            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False
            )
        except Employee.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            employee = Employee.objects.get(id=pk)
            employee.delete()
            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except Employee.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            employee = Employee.objects.get(id=pk)

            position_id = content["position"]
            position = Position.objects.get(id=position_id)
            content["position"] = position

            props = ["position"]
            for prop in props:
                if prop in content:
                    setattr(employee, prop, content[prop])
            employee.save()
            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except Employee.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response



@require_http_methods(["GET", "POST"])
def api_positions(request):
    if request.method == "GET":
        positions = Position.objects.all()
        return JsonResponse(
            {"positions": positions},
            encoder=PositionEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            position = Position.objects.create(**content)
            return JsonResponse(
                position,
                encoder=PositionEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create position"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_position(request, pk):
    if request.method == "GET":
        try:
            position = Position.objects.get(id=pk)
            return JsonResponse(
                position,
                encoder=PositionEncoder,
                safe=False
            )
        except Position.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            position = Position.objects.get(id=pk)
            position.delete()
            return JsonResponse(
                position,
                encoder=PositionEncoder,
                safe=False,
            )
        except Position.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        try:
            content = json.loads(request.body)
            position = Position.objects.get(id=pk)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(position, prop, content[prop])
            position.save()
            return JsonResponse(
                position,
                encoder=PositionEncoder,
                safe=False,
            )
        except Position.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET"])
def api_technicians(request):
    position = Position.objects.get(name="Technician")
    position_id = position.id
    employees = Employee.objects.filter(position=position_id)
    return JsonResponse(
        {"employees": employees},
        encoder=EmployeeEncoder,
    )

@require_http_methods(["GET"])
def api_sales_people(request):
    position = Position.objects.get(name="Sales Person")
    position_id = position.id
    employees = Employee.objects.filter(position=position_id)
    return JsonResponse(
        {"employees": employees},
        encoder=EmployeeEncoder,
    )

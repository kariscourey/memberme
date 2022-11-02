from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json

from .encoders import (
    ServiceEncoder,
    TechnicianEncoder,
)
from .models import Service, Technician, AutomobileVO


@require_http_methods(["GET", "POST"])
def api_services(request):

    if request.method == "GET":
        services = Service.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ServiceEncoder,
            safe=False
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
                {"message": "Invalid Automobile bro"},
                status=400,
            )
        try:
            technician_employee_number = content["technician"]
            technician = Technician.objects.get(employee_number=technician_employee_number)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician no such thing"},
                status=400,
            )

        service = Service.objects.create(**content)
        return JsonResponse(
            service,
            encoder=ServiceEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_technicians(request):

    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )

@require_http_methods(["PUT"])
def api_service(request, pk):

    try:
        content = json.loads(request.body)
        service = Service.objects.get(id=pk)

        props = ["status"]
        for prop in props:
            if prop in content:
                setattr(service, prop, content[prop])
        service.save()
        return JsonResponse(
            service,
            encoder=ServiceEncoder,
            safe=False,
        )
    except Service.DoesNotExist:
        response = JsonResponse({"message": "Does not exist"})
        response.status_code = 404
        return response

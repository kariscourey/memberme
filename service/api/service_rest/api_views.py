from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from .models import ServiceAppointment, Technician, AutomobileVO

class ServiceAppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "owner_name",
        "appointment_date",
        "tech_name",
        "reason",
        "status",
        ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "tech_name",
        "employee_number",


    ]
# Create your views here.
@require_http_methods(["GET", "POST"])
def api_appointments(request):

    if request.method == "GET":
        service_appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"service_appointments": service_appointments},
            encoder=ServiceAppointmentEncoder,
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

        service_appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentEncoder,
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

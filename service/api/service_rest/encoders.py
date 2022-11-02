from common.json import ModelEncoder

from .models import AutomobileVO, AutomobileVO, Service, Technician

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",


    ]

class AutomobileVOEncoder(ModelEncoder):
    model= AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "id",
        "automobile",
        "customer",
        "appointment_date",
        "technician",
        "reason",
        "status",
        ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }

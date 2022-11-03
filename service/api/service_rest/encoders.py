from common.json import ModelEncoder

from .models import AutomobileVO, Service, EmployeeVO


class AutomobileVOEncoder(ModelEncoder):
    model= AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class EmployeeVOEncoder(ModelEncoder):
    model = EmployeeVO
    properties = [
        "import_href",
        "name",
        "employee_number",
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
        "technician": EmployeeVOEncoder(),
    }

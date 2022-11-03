from common.json import ModelEncoder

from .models import AutomobileVO, Service, EmployeeVO, CustomerVO


class AutomobileVOEncoder(ModelEncoder):
    model= AutomobileVO
    properties = [
        "import_href",
        "vin",
    ]


class CustomerVOEncoder(ModelEncoder):
    model = CustomerVO
    properties = [
        "import_href",
        "name",
        "phone_number",
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
        "customer": CustomerVOEncoder(),
        "technician": EmployeeVOEncoder(),
    }

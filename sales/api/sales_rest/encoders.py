from common.json import ModelEncoder

from .models import AutomobileVO, CustomerVO, EmployeeVO, Sale


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "sold",
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


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "automobile",
        "sales_person",
        "customer",
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": EmployeeVOEncoder(),
        "customer": CustomerVOEncoder(),
    }

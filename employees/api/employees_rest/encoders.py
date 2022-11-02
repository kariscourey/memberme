from common.json import ModelEncoder

from .models import Employee, Position


class PositionEncoder(ModelEncoder):
    model = Position
    properties = [
        "name",
    ]

class EmployeeEncoder(ModelEncoder):
    model = Employee
    properties = [
        "name",
        "employee_number",
        "position",
    ]
    encoders = {
        "position": PositionEncoder(),
    }

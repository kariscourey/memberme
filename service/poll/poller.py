import django
import os
import sys
import time
import json
import requests
sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO, EmployeeVO

def get_automobiles():
    res = requests.get('http://inventory-api:8000/api/automobiles/')
    content = json.loads(res.content)


    for automobile in content["automobiles"]:
        AutomobileVO.objects.update_or_create(
            import_href=automobile["href"],
            defaults={
                'vin': automobile['vin'],
            },
        )

def get_employees():
    res = requests.get('http://employees-api:8000/api/employees/')
    content = json.loads(res.content)


    for employee in content["employees"]:
        if employee['position']['name'].lower() == 'technician':
            EmployeeVO.objects.update_or_create(
                import_href=employee["href"],
                defaults={
                    'name': employee['name'],
                    'employee_number': employee['employee_number'],
                },
        )

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_automobiles()
            get_employees()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

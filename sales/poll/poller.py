import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

def get_automobiles():
    res = requests.get('http://inventory-api:8000/api/automobiles/')
    content = json.loads(res.content)


    for automobile in content["automobiles"]:
        AutomobileVO.objects.update_or_create(
            import_href=automobile["href"],
            defaults={
                'vin': automobile['vin'],
                'sold': automobile['sold'],
            },
        )


def poll():
    while True:
        try:
            print('Sales poller polling for data')
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
            pass
        time.sleep(60)


if __name__ == "__main__":
    poll()

import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

# Import models from sales_rest, here.
# from sales_rest.models import Something
from sales_rest.models import AutomobileVO

def get_automobiles():
    res = requests.get('http://inventory-api:8000/api/automobiles/')
    # print("res: ", res)
    # print("---------------")
    content = json.loads(res.content)
    # print("content: ", content)
    # print("---------------")



    for automobile in content["automobiles"]:
        AutomobileVO.objects.update_or_create(
            import_href=automobile["href"],
            defaults={
                # 'color': automobile['color'],
                # 'year': automobile['year'],
                'vin': automobile['vin'],
                # 'model_id': automobile['model']['id'],
                'sold': automobile['sold'],
            },
        )
        # print("automobilevo count: ", AutomobileVO.objects.all().count())
        # print("---------------")


def poll():
    while True:
        try:
            print('Sales poller polling for data')
            # Write your polling logic, here
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
            pass
        time.sleep(60)


if __name__ == "__main__":
    poll()

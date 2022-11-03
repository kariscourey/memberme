import json
import requests
# from requests.adapters import HTTPAdapter
# from urllib3.util.retry import Retry


def update_automobile(vin):
    headers = {"Content-Type": "application/json"}
    data = {"sold": True}

    url = f"http://inventory-api:8000/api/automobiles/{vin}/"

    requests.put(url, json=data, headers=headers)

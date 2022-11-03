import json
import requests

def update_automobile(vin):
    headers = {"Content-Type": "application/json"}
    data = {"sold": True}

    url = f"http://inventory-api:8000/api/automobiles/{vin}/"

    requests.put(url, json=data, headers=headers)

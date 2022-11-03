import json
import requests
# from requests.adapters import HTTPAdapter
# from urllib3.util.retry import Retry


def update_automobile(vin):
    headers = {"Content-Type": "application/json"}
    data = {"sold": True}

    # try:

    # session = requests.Session()
    # retry = Retry(connect=3, backoff_factor=0.5)
    # adapter = HTTPAdapter(max_retries=retry)
    # session.mount('http://', adapter)
    # session.mount('https://', adapter)

    url = f"http://inventory-api:8000/api/automobiles/{vin}/"

    requests.put(url, json=data, headers=headers)
    # except requests.exceptions.ConnectionError:
    #     print("Connection refused")

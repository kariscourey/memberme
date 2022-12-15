## Customers microservice

### List Customers

* Endpoint path: /customers
* Endpoint method: GET

* Response: A list of customers
* Response shape (JSON):
    ```json
    {
      "customers": [
        {
          "href": string,
          "id": number,
          "name": string,
          "address": string,
          "phone_number": number
        }
      ]
    }
    ```

### Create Customer

* Endpoint path: /customers
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "name": string,
      "address": string,
      "phone_number": number,
    }
    ```

* Response: A detail of customer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "address": string,
        "phone_number": number
    }

### Show Customer

* Endpoint path: /customers/`<int:id>`
* Endpoint method: GET

* Response: A detail of customer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "address": string,
        "phone_number": number
    }

### Update Customer

* Endpoint path: /customers/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "name": string,
      "address": string,
      "phone_number": number,
    }
    ```

* Response: A detail of customer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "address": string,
        "phone_number": number
    }

### Delete Customer

* Endpoint path: /customers/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of customer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "address": string,
        "phone_number": number
    }


## Employees microservice

### List Employees

* Endpoint path: /employees
* Endpoint method: GET

* Response: A list of employees
* Response shape (JSON):
    ```json
    {
      "employees": [
        {
          "href": string,
          "name": string,
          "employee_number": number,
          "position": {
            "href": string,
            "id": number,
            "name": string
          }
        }
      ]
    }
    ```


### List Technicians

* Endpoint path: /employees/technicians
* Endpoint method: GET

* Response: A list of technicians
* Response shape (JSON):
    ```json
    {
      "employees": [
        {
          "href": string,
          "name": string,
          "employee_number": number,
          "position": {
            "href": string,
            "id": number,
            "name": string
          }
        }
      ]
    }
    ```

### List Sales People

* Endpoint path: /employees/sales_people
* Endpoint method: GET

* Response: A list of sales people
* Response shape (JSON):
    ```json
    {
      "employees": [
        {
          "href": string,
          "name": string,
          "employee_number": number,
          "position": {
            "href": string,
            "id": number,
            "name": string
          }
        }
      ]
    }
    ```


### Create Employee

* Endpoint path: /employees
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "name": string,
      "phone_number": number,
      "position": number
    }
    ```

* Response: A detail of employee
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Show Employee

* Endpoint path: /employees/`<int:id>`
* Endpoint method: GET

* Response: A detail of employee
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Update Employee

* Endpoint path: /employees/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "position": number
    }
    ```

* Response: A detail of employee
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Delete Employee

* Endpoint path: /employees/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of employee
* Response shape (JSON):
    ```json
    {
        "href": string,
        "name": string,
        "employee_number": number,
        "position": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### List Positions

* Endpoint path: /positions
* Endpoint method: GET

* Response: A list of positions
* Response shape (JSON):
    ```json
    {
      "positions": [
        {
            "href": string,
            "id": number,
            "name": string
        }
      ]
    }
    ```

### Create Position

* Endpoint path: /positions
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "name": string
    }
    ```

* Response: A detail of position
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }

### Show Employee

* Endpoint path: /positions/`<int:id>`
* Endpoint method: GET

* Response: A detail of position
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }

### Update Position

* Endpoint path: /positions/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
      "name": string
    }
    ```

* Response: A detail of position
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }

### Delete Position

* Endpoint path: /positions/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of position
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }


## Inventory microservice

### List Automobiles

* Endpoint path: /automobiles
* Endpoint method: GET

* Response: A list of automobiles
* Response shape (JSON):
    ```json
    {
        "automobiles": [
            {
                "href": string,
                "id": number,
                "color": string,
                "year": number,
                "vin": string,
                "model": {
                    "href": string,
                    "id": number,
                    "name": string,
                    "picture_url": string,
                    "manufacturer": {
                        "href": string,
                        "id": number,
                        "name": string
                    }
                },
                "sold": boolean
            }
        ]
    }
    ```

### Create Automobile

* Endpoint path: /automobiles
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
    "color": string,
        "year": number,
        "vin": string,
        "model_id": number
    }
    ```

* Response: A detail of automobile
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "color": string,
        "year": number,
        "vin": string,
        "model": {
            "href": string,
            "id": number,
            "name": string,
            "picture_url": string,
            "manufacturer": {
                "href": string,
                "id": number,
                "name": string
            }
        },
        "sold": boolean
    }

### Show Automobile

* Endpoint path: /automobiles/`<str:vin>`
* Endpoint method: GET

* Response: A detail of automobile
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "color": string,
        "year": number,
        "vin": string,
        "model": {
            "href": string,
            "id": number,
            "name": string,
            "picture_url": string,
            "manufacturer": {
                "href": string,
                "id": number,
                "name": string
            }
        },
        "sold": boolean
    }

### Update Automobile

* Endpoint path: /automobiles/`<str:vin>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "color": string,
        "year": number,
        "sold": boolean
    }
    ```

* Response: A detail of automobile
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "color": string,
        "year": number,
        "vin": string,
        "model": {
            "href": string,
            "id": number,
            "name": string,
            "picture_url": string,
            "manufacturer": {
                "href": string,
                "id": number,
                "name": string
            }
        },
        "sold": boolean
    }

### Delete Automobile

* Endpoint path: /automobiles/`<str:vin>`
* Endpoint method: DELETE

* Response: A detail of automobile
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "color": string,
        "year": number,
        "vin": string,
        "model": {
            "href": string,
            "id": number,
            "name": string,
            "picture_url": string,
            "manufacturer": {
                "href": string,
                "id": number,
                "name": string
            }
        },
        "sold": boolean
    }

### List Models

* Endpoint path: /models
* Endpoint method: GET

* Response: A list of models
* Response shape (JSON):
    ```json
    {
        "models": [
            {
                "href": string,
                "id": number,
                "name": string,
                "picture_url": string,
                "manufacturer": {
                    "href": string,
                    "id": number,
                    "name": string
                }
            }
        ]
    }
    ```

### Create Model

* Endpoint path: /models
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string,
        "picture_url": string,
        "manufacturer_id": number
    }
    ```

* Response: A detail of model
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "picture_url": string,
        "manufacturer": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Show Model

* Endpoint path: /models/`<int:id>`
* Endpoint method: GET

* Response: A detail of model
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "picture_url": string,
        "manufacturer": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Update Model

* Endpoint path: /models/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string,
        "picture_url": string
    }
    ```

* Response: A detail of model
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "picture_url": string,
        "manufacturer": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### Delete Model

* Endpoint path: /models/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of model
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string,
        "picture_url": string,
        "manufacturer": {
            "href": string,
            "id": number,
            "name": string
        }
    }

### List Manufacturers

* Endpoint path: /manufacturers
* Endpoint method: GET

* Response: A list of manufacturers
* Response shape (JSON):
    ```json
    {
        "manufacturers": [
            {
                "href": string,
                "id": number,
                "name": string
            }
        ]
    }
    ```

### Create Manufacturer

* Endpoint path: /manufacturers
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string
    }
    ```

* Response: A detail of manufacturer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }

### Show Manufacturer

* Endpoint path: /manufacturers/`<int:id>`
* Endpoint method: GET

* Response: A detail of manufacturer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }

### Update Manufacturer

* Endpoint path: /manufacturers/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "name": string
    }
    ```

* Response: A detail of manufacturer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }

### Delete Manufacturer

* Endpoint path: /manufacturers/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of manufacturer
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "name": string
    }


## Sales microservice

### List Sales

* Endpoint path: /sales
* Endpoint method: GET

* Response: A list of sales
* Response shape (JSON):
    ```json
    {
      "sales": [
        {
            "id": number,
            "price": number,
            "automobile": {
                "import_href": string,
                "vin": string,
                "sold": boolean
            },
            "sales_person": {
                "import_href": string,
                "name": string,
                "employee_number": number
            },
            "customer": {
                "import_href": string,
                "name": string,
                "phone_number": number
            }
		}
      ]
    }
    ```

### Create Sale

* Endpoint path: /sales
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "price": string,
        "automobile": string,
        "sales_person": number,
        "customer": number
    }
    ```

* Response: A detail of sale
* Response shape (JSON):
    ```json
    {
        "id": number,
        "price": number,
        "automobile": {
            "import_href": string,
            "vin": string,
            "sold": boolean
        },
        "sales_person": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        }
    }

### Show Sale

* Endpoint path: /sales/`<int:id>`
* Endpoint method: GET

* Response: A detail of sale
* Response shape (JSON):
    ```json
    {
        "id": number,
        "price": number,
        "automobile": {
            "import_href": string,
            "vin": string,
            "sold": boolean
        },
        "sales_person": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        }
    }

### Update Sale

* Endpoint path: /sales/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "price": string,
        "sales_person": number,
        "customer": number
    }
    ```

* Response: A detail of sale
* Response shape (JSON):
    ```json
    {
        "id": number,
        "price": number,
        "automobile": {
            "import_href": string,
            "vin": string,
            "sold": boolean
        },
        "sales_person": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        }
    }

### Delete Sale

* Endpoint path: /sales/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of sale
* Response shape (JSON):
    ```json
    {
        "id": number,
        "price": number,
        "automobile": {
            "import_href": string,
            "vin": string,
            "sold": boolean
        },
        "sales_person": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        }
    }


## Services microservice

### List Services

* Endpoint path: /services
* Endpoint method: GET

* Response: A list of services
* Response shape (JSON):
    ```json
    {
      "services": [
        {
            "href": string,
            "id": number,
            "automobile": {
                "import_href": string,
                "vin": string
            },
            "customer": {
                "import_href": string,
                "name": string,
                "phone_number": number
            },
            "appointment_date": string,
            "technician": {
                "import_href": string,
                "name": string,
                "employee_number": number
            },
            "reason": string,
            "status": string
        }
      ]
    }
    ```

### Create Service

* Endpoint path: /services
* Endpoint method: POST

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "appointment_date": string,
        "automobile": string,
        "technician": number,
        "customer": number,
        "reason": string
    }
    ```

* Response: A detail of service
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "automobile": {
            "import_href": string,
            "vin": string
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        },
        "appointment_date": string,
        "technician": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "reason": string,
        "status": string
    }

### Show Service

* Endpoint path: /services/`<int:id>`
* Endpoint method: GET

* Response: A detail of service
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "automobile": {
            "import_href": string,
            "vin": string
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        },
        "appointment_date": string,
        "technician": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "reason": string,
        "status": string
    }

### Update Service

* Endpoint path: /services/`<int:id>`
* Endpoint method: PUT

* Headers:
  * Content-Type: application/json

* Request shape (JSON):
    ```json
    {
        "appointment_date": string,
        "technician": number,
        "customer": number,
        "reason": string,
        "status": string
    }
    ```

* Response: A detail of service
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "automobile": {
            "import_href": string,
            "vin": string
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        },
        "appointment_date": string,
        "technician": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "reason": string,
        "status": string
    }

### Delete Service

* Endpoint path: /services/`<int:id>`
* Endpoint method: DELETE

* Response: A detail of service
* Response shape (JSON):
    ```json
    {
        "href": string,
        "id": number,
        "automobile": {
            "import_href": string,
            "vin": string
        },
        "customer": {
            "import_href": string,
            "name": string,
            "phone_number": number
        },
        "appointment_date": string,
        "technician": {
            "import_href": string,
            "name": string,
            "employee_number": number
        },
        "reason": string,
        "status": string
    }

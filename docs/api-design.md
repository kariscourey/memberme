# Saved members


## Get saved member

* Endpoint path: /saved_members/`<str:uuid>`
* Endpoint method: GET
* Query Parameters:
  * saved_member_uuid

* Response: A detail of saved member
* Response shape (JSON):
    ```json
    {
        "id": number,
        "name_first": string,
        "name_last": string,
        "dog_age": number,
        "dob_date": string,
        "email": string,
        "street_number": number,
        "street_name": string,
        "city": string,
        "state": string,
        "postcode": string,
        "thumbnail": string,
        "large": string,
        "phone": string,
        "uuid": string,
    }


## Get all saved members

* Endpoint path: /saved_members
* Endpoint method: GET

* Response: A list of saved members
* Response shape:
    ```json
    {
      "saved_members":[
        {
          "id": number,
          "name_first": string,
          "name_last": string,
          "dog_age": number,
          "dob_date": string,
          "email": string,
          "street_number": number,
          "street_name": string,
          "city": string,
          "state": string,
          "postcode": string,
          "thumbnail": string,
          "large": string,
          "phone": string,
          "uuid": string,
        }
      ]
    }


## Create or update saved member

* Endpoint path: /saved_members/
* Endpoint method: POST

* Request shape (JSON):
    ```json
    {
        "name_first": string,
        "name_last": string,
        "dog_age": number,
        "dob_date": string,
        "email": string,
        "street_number": number,
        "street_name": string,
        "city": string,
        "state": string,
        "postcode": string,
        "thumbnail": string,
        "large": string,
        "phone": string,
        "uuid": string,
    }
    ```

* Response: A detail of saved member
* Response shape (JSON):
    ```json
    {
        "id": number,
        "name_first": string,
        "name_last": string,
        "dog_age": number,
        "dob_date": string,
        "email": string,
        "street_number": number,
        "street_name": string,
        "city": string,
        "state": string,
        "postcode": string,
        "thumbnail": string,
        "large": string,
        "phone": string,
        "uuid": string,
    }


## Delete saved member

* Endpoint path: /saved_members/`<str:uuid>`
* Endpoint method: DELETE
* Query Parameters:
  * saved_member_uuid

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
      "success": boolean
    }
    ```

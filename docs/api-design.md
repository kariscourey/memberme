## Saved members

### Get all saved members

* Endpoint path: /saved_members
* Endpoint method: GET

* Response: A list of saved members
* Response shape:
    ```json
    {
      "saved_members":[
        {
          "id": number,
          "first_name": string,
          "last_name": string,
          "age": number,
          "postal_address": string,
          "phone": string,
          "uuid": string,
        }
      ]
    }


### Create or update saved member

* Endpoint path: /saved_members/
* Endpoint method: POST

* Request shape (JSON):
    ```json
    {
        "first_name": string,
        "last_name": string,
        "age": number,
        "postal_address": string,
        "phone": string,
        "uuid": string,
    }
    ```

* Response: A detail of saved member
* Response shape (JSON):
    ```json
    {
        "id": number,
        "first_name": string,
        "last_name": string,
        "age": number,
        "postal_address": string,
        "phone": string,
        "uuid": string,
    }


### Delete saved member

* Endpoint path: /saved_members/`<str:uuid>`
* Endpoint method: DELETE
* Query Parameters:
  * saved_member_uuid

* Headers:
  * Authorization: Bearer token

* Response: An indication of success or failure
* Response shape (JSON):
    ```json
    {
      "success": boolean
    }
    ```

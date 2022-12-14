# Data models

## Customers microservice

### Customer

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | no     | no       |
| address           | string            | no     | no       |
| phone_number      | int               | yes    | no       |



## Employees microservice

### Position

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | yes    | no       |

### Employee

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | int               | yes    | no       |
| position          | ref to position   | no     | no       |



## Inventory microservice

### Manufacturer

| name              | type              | unique | optional |
| ----------------  | ----------------- | ------ | -------- |
| id                | int               | yes    | no       |
| name              | string            | yes    | no       |


### VehicleModel

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| name              | string                | no     | no       |
| picture_url       | string                | no     | no       |
| manufacturer      | ref to manuafaturer   | no     | no       |


### Automobile

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| color             | string                | no     | no       |
| year              | int                   | no     | no       |
| vin               | string                | yes    | no       |
| model             | ref to vehiclemodel   | no     | no       |
| sold              | boolean               | no     | yes      |



## Sales microservice

### AutomobileVO

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| import_href       | string                | yes    | no       |
| vin               | string                | yes    | no       |
| sold              | boolean               | no     | yes      |

### CustomerVO

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| import_href       | string                | yes    | yes      |
| name              | string                | no     | no       |
| phone_number      | int                   | yes    | no       |


### EmployeeVO

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| import_href       | string                | yes    | yes      |
| name              | string                | no     | no       |
| employee_number   | int                   | yes    | no       |


### Sale

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| price             | int                   | no     | no       |
| automobile        | ref to automobile     | no     | no       |
| sales_person      | ref to salesperson    | no     | no       |
| customer          | ref to customer       | no     | no       |




## Services microservice

### AutomobileVO

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| import_href       | string                | yes    | no       |
| vin               | string                | yes    | no       |

### CustomerVO

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| import_href       | string                | yes    | yes      |
| name              | string                | no     | no       |
| phone_number      | int                   | yes    | no       |


### EmployeeVO

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| import_href       | string                | yes    | yes      |
| name              | string                | no     | no       |
| employee_number   | int                   | yes    | no       |


### Service

| name              | type                  | unique | optional |
| ----------------  | --------------------- | ------ | -------- |
| id                | int                   | yes    | no       |
| automobile        | ref to automobile     | no     | no       |
| customer          | ref to customer       | no     | no       |
| appointment_date  | date                  | no     | no       |
| technician        | ref to employee       | no     | no       |
| reason            | string                | no     | no       |
| status            | string                | no     | yes      |

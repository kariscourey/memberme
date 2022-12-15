# AutoAuto
Automobile-dealership-management solution designed for managing automobile inventory, sales, services, employees, and customers. Supports automobile, sale, service, employee, and customer creation and management. Features Django, React, domain-driven design, microservices, and data interactions with RESTful APIs.


## Design
- [Design summary](docs/design-summary.md)
- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)

## Methods
- [Methods](docs/methods.md)


## Intended Market
Automobile dealerships who intend to utilize a sophisticated solution for managing inventory, sales, services, empoloyees, and customers.


## Functionality
- Create and view inventory
- Create and view sales
- Create and view services
- Create and view employees
- Create and view customers


## Project Initialization

To fully enjoy this application on your local machine, please ensure you have <b>Docker</b> installed and follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Ensure <b>Docker</b> is running on your machine
4. Run `docker volume create beta-data`
5. Run `docker compose build`
6. Run `docker compose up`


## Project Deactivation
1. Stop containers
2. Run `docker compose down`

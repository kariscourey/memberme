# MemberMe
Membership-management solution. Features FastAPI, React, and data interactions with RESTful APIs.


## Design
- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)

## Intended Market
Individuals and teams seeking to view and manage members.


## Functionality
- View members
- CRUD saved members


## Project Initialization

Ensure <b>Docker</b> is installed and follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Ensure <b>Docker</b> is running on your machine
4. Run `docker volume create memberme`
5. Run `docker compose build`
6. Run `docker compose up`
7. Navigate to `localhost:3000` in your browser


## Project Deactivation
1. Stop containers
2. Run `docker compose down`

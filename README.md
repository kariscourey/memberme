# MemberMe
Membership-management solution. Features FastAPI, React (stylized with [Material UI](https://mui.com/material-ui/)), and data interactions via RESTful APIs.

[Front-end](https://kariscourey.gitlab.io/memberme/) deployed via GitLab pages. <br/>
[Back-end](https://memberme-api.onrender.com/docs) deployed via Render.


## Design
- [API design](docs/api-design.md)
- [Data model](docs/data-model.md)


## Intended Market
Individuals and teams seeking to view and manage members.


## Functionality
- View members
- CRUD saved members


## Testing
Testing was completed using the FastAPI interface. </br>
Sample test may be found in `api/tests`.


## Project Initialization

Ensure <b>Docker</b> is installed and follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Ensure <b>Docker</b> is running on your machine
4. Run `docker volume create memberme`
5. Run `docker compose build`
6. Run `docker compose up`
    - `.env` file is included in project repository for quick setup. It is not typically suggested to include this file to the repository.
7. Navigate to `localhost:3000` in your browser to view front-end UI
8. Navigate to `localhost:8000/docs` in your browser to view back-end UI


## Project Deactivation
1. Stop containers
2. Run `docker compose down`

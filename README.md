# Group D API

This is a collaborative API project developed by Group D. The API allows users to interact with exams data, including listing, adding, and updating exams.

## Contributors and Features

- **Jeff Monreal**: Assisted with code review and documentation updates.
- **Alexus Sagaral**: Added the `GET /exam-group` and `GET /exams` endpoints.
- **Natasha Dinopol**: Implemented the `POST /exams` endpoint for adding new exams.
- **Mark Catubig**: Developed the `PUT /exams/:id` endpoint for updating exams.

## API Endpoints

### GET /exam-group
- **Description**: Returns the group name and message.
- **Response**:
  ```json
  { "message": "Group D API" }


### 1. GET /exams
- **Description**: Returns a hardcoded list of users.
- **Response**:
  ```json
  {
    { "id": 1, "name": "Jeff Monreal" },
    { "id": 2, "name": "Alexus Sagaral" },
    { "id": 3, "name": "Mark Dave Catubig" },
    { "id": 4, "name": "Natasha Dinopol" }
  }

### 2. POST /exams
- **Description**: adds a new exam to an array.
- **Resquest**:
{ "name": "Justine Paraiso" }

- **Response**:
  ```json
  {
    { "id": 5, "name": "Justine Paraiso" },
  }

### 3. PUT /exams/:id
- **Description**: adds a new exam to an array.
- **Resquest URL**: /exams/5
- **Response body**:  
    "name": "Justine"
- **Response**:
  ```json
  {
   { "id": 5, "name": "Justine" }
  }


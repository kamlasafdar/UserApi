# User API

This project is a simple Express API that provides a list of users. You can start the server and test the `GET /api/users` endpoint using your browser, curl, or Postman.

## Getting Started

Follow these steps to get the server up and running on your local machine:

### 1. Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/kamlasafdar/UserApi.git
cd UserApi
npm install
node server.js
```

### 2. Test the API
Once the server is running, you can test the API endpoint.

Using Browser:

Open your browser and go to:
http://localhost:5000/api/users
You should see the list of users in JSON format.


Using Postman:

Open Postman.
Create a new GET request.
Enter the URL: http://localhost:5000/api/users.
Click "Send".
You should see a JSON response with the list of users.


This project uses CORS to allow cross-origin requests, so you can access the API from a different domain or port.

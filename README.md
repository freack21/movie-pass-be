# 🎬 MoviePass API

Welcome to the MoviePass API! This project is a Node.js-based backend service for managing user authentication and profiles for a movie ticket booking application.

## 📋 Features

- User registration and login
- Profile management (view and update profile)
- Avatar upload and storage
- Token-based authentication (access and refresh tokens)

## 🛠️ Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/freack21/movie-pass-be.git
   ```

   ```bash
   cd movie-pass-be
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy the example environment file and update it with your configuration:

   ```bash
   cp .env.example .env
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000` (Port may vary based on `.env`).

## 📄 API Endpoints

### Authentication

- **POST /auth/register**

  - Registers a new user.
  - Request body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`

- **POST /auth/login**

  - Logs in an existing user.
  - Request body: `{ "email": "john@example.com", "password": "password123" }`

- **POST /auth/logout**
  - Logs out the current user.

### User Profile

- **GET /auth/profile**

  - Retrieves the profile of the logged-in user.

- **PUT /auth/profile**
  - Updates the profile of the logged-in user.
  - Request body: `{ "name": "John Doe", "phone": "1234567890", "gender": "male" }`
  - Supports avatar upload.

## 📂 Project Structure

```
movie-pass-be/
├── config/
│   └── db.js
├── controller/
│   └── user.js
├── public/
│   └── avatars/
├── route/
│   └── auth.js
├── util/
│   └── not-found.js
├── .env.example
├── .env
├── index.js
├── package.json
└── README.md
```

## 📝 License

This project is licensed under the ISC License.

## 📞 Contact

If you have any questions or feedback, feel free to reach out to us at [fixri21@gmail.com](mailto:fixri21@gmail.com).

Enjoy using MoviePass API! 🎉

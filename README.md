# 🎬 MoviePass API

Welcome to the MoviePass API! This project is a Node.js-based backend service for managing user authentication and profiles for a movie ticket booking application.

## 📋 Features

- Movie search

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

### Movies

- **GET /movie**

  - Get now playing movie list.

- **GET /movie/:id**

  - Get movie detail by movie id.

- **GET /movie/search**

  - Searches for movies based on query parameters.
  - Request query: `?title=Inception`

- **GET /movie/search/:id**

  - Searches for movies based on id params.

## 📝 License

This project is licensed under the ISC License.

## 📞 Contact

If you have any questions or feedback, feel free to reach out to us at [fixri21@gmail.com](mailto:fixri21@gmail.com).

Enjoy using MoviePass API! 🎉

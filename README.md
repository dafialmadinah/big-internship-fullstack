# Simple To-Do List Application (MERN)

Fullstack **Simple To-Do List Application** built using the **MERN Stack** with JWT authentication and simple styling using **Tailwind CSS**.  
This project was developed as part of a **technical take-home test at PT. Bejana Inovasi Global**.

---

## 📋 Features

### 🔐 Authentication
- User Registration (username & password)
- User Login & Logout
- JWT-based authentication
- Protected routes (frontend & backend)

### 📝 To-Do Management
- Add new to-do
- View list of to-dos
- Mark to-do as completed
- Delete to-do
- Each user can only access their own to-dos

### 🎨 Frontend
- Modern and clean UI
- Responsive design (mobile & desktop)
- Styled using Tailwind CSS

---

## 🏗️ Project Architecture

This project uses separated **frontend** and **backend** architecture.

```
root
├── todo-backend        # Backend API (Node.js + Express)
└── todo-frontend       # Frontend App (React + Vite)
```

### Backend Structure
```
todo-backend/src
├── controllers         # Request handlers
├── models              # Mongoose schemas
├── routes              # API routes
├── middleware          # JWT authentication middleware
├── config              # Database configuration
└── server.js           # Application entry point
```

### Frontend Structure
```
todo-frontend/src
├── pages               # Login, Register, Dashboard
├── components          # Reusable UI components
├── services            # API (Axios) configuration
├── App.jsx             # Routing
└── main.jsx            # App bootstrap
```

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt (password hashing)

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM

---

## ⚙️ Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (Local or MongoDB Atlas)

---

## 🔧 Backend Setup

```bash
cd todo-backend
npm install
```

Create `.env` file:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run backend server:

```bash
npm run dev
```

Backend will run at:

```
http://localhost:5001
```

---

## 🎨 Frontend Setup

```bash
cd todo-frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 📚 API Endpoints

### Authentication

* `POST /api/auth/register` – Register user
* `POST /api/auth/login` – Login user

### Todos (Protected)

* `GET /api/todos` – Get user to-dos
* `POST /api/todos` – Create new to-do
* `PATCH /api/todos/:id/toggle` – Toggle to-do status
* `DELETE /api/todos/:id` – Delete to-do

---

## 🔐 Authentication Flow

1. User logs in with username & password
2. Backend returns JWT token
3. Token is stored in `localStorage`
4. Token is sent in request header:

   ```
   Authorization: Bearer <JWT_TOKEN>
   ```
5. Backend validates token and user access

---

## 🗂️ Database Schema

### Users

```json
{
  "_id": "ObjectId",
  "username": "string",
  "password": "hashed_password",
  "createdAt": "Date"
}
```

### Todos

```json
{
  "_id": "ObjectId",
  "title": "string",
  "completed": "boolean",
  "user": "ObjectId (User)",
  "createdAt": "Date"
}
```

---

## 🧪 Testing

* Backend tested using Postman
* Frontend tested via browser
* Data stored persistently in MongoDB

---

## 🔒 Security Notes

* Passwords are hashed using bcrypt
* JWT used for stateless authentication
* Protected API routes using auth middleware
* Users cannot access other users’ data

---

## 📄 License

This project is created for learning and technical evaluation purposes.

---

## 👤 Developer

Muhammad Rizqullah Almadinah

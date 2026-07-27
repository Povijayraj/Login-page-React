# 🔐 React Login Page with Backend Integration

A modern and responsive **Login Authentication** project built with **React (Vite)** for the frontend and **Node.js + Express** for the backend. This project demonstrates a complete login workflow, including frontend form validation, backend API integration, mock authentication, error handling, and protected navigation to a dashboard.

The application uses a clean, original UI design and communicates with the backend using **Axios/Fetch API**. User credentials are validated against static mock data, making it a great beginner-friendly project for understanding full-stack authentication without requiring a database.

---

## 🚀 Features

* 🎨 Modern and responsive custom login UI
* ⚛️ Built with React and Vite
* 📧 Email and password input fields
* ✅ Frontend form validation

  * Required field validation
  * Email format validation
  * Password length validation
* 🌐 Express backend API for handling login requests
* 🔗 Frontend and backend integration using Axios/Fetch
* 🔐 Mock authentication using static credentials
* ❌ Error messages for invalid login attempts
* ✅ Redirects to a Dashboard page after successful login
* 🎯 Clean and beginner-friendly project structure
* 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS / Tailwind CSS
* Axios / Fetch API
* React Router DOM

### Backend

* Node.js
* Express.js
* CORS

---

## 📂 Project Structure

```text
Login-page/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── routes/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Povijayraj/React-Login-page.git
```

### 2. Navigate to the Project

```bash
cd Login-page
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## ▶️ Run the Project

### Start Backend

```bash
npm start
```

or

```bash
node server.js
```

### Start Frontend

```bash
cd ../frontend
npm run dev
```

Open the browser and visit:

```text
http://localhost:5173
```

---

## 🔑 Mock Login Credentials

Use the credentials configured in your backend mock data.

Example:

```text
Email: admin@nexus.com
Password: Pass@123
```

> Replace these with the credentials defined in your own project if they are different.

---

## 📸 Screenshots

Add screenshots of:

* Login Page
* Validation Errors
* Successful Login
* Dashboard Page

---

## 📚 What I Learned

* Building React applications using Vite
* Managing form state and validation
* Creating REST APIs with Express
* Connecting frontend and backend
* Handling API requests using Axios/Fetch
* Implementing mock authentication
* Managing login success and error states
* Client-side routing with React Router

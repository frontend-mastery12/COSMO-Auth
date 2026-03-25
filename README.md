![Homepage Screenshot](https://github.com/frontend-mastery12/COSMO-Auth/blob/09a464cc592560952bdc6970cb0b2d8b7423e895/COSMO-MERN%20Stack%20Auth-A-Test.png)

# 🚀 Build a Full MERN Auth System from Scratch (JWT + Protected Routes)

## Overview
Build a complete MERN Stack Authentication System from scratch with JWT, protected routes, and clean scalable architecture. Learn how to structure a professional full stack login and register system the right way.

---

## ✨ Key Features

### 🔐 Authentication & Security
- **JWT Authentication** — Secure token-based login and registration system
- **Password Hashing** — Bcrypt encryption before storing in database
- **Auth Middleware** — JWT verification gatekeeper on every protected request
- **Protected Routes** — Dashboard accessible only to authenticated users
- **Auto Logout** — Clean token removal and redirect on logout
- **HTTP Status Codes** — Proper 400, 401, 500 responses (never fake 200s)

### 🏗 Architecture & Code Quality
- **Clean Folder Structure** — Separated models, controllers, routes, middleware, utils
- **MVC Pattern** — Models handle data, controllers handle logic, routes handle traffic
- **Consistent API Response** — Every response follows `{ success, message, data }` pattern
- **Centralized Error Handling** — Global error middleware keeps controllers clean
- **Token Utility** — `generateToken()` helper, zero duplicated logic
- **Environment Variables** — Sensitive config isolated in `.env`

### 🎨 Frontend & UX
- **React Context API** — Global auth state with `AuthContext`
- **Centralized API Service** — Base URL, token attachment, error handling in one file
- **Loading & Error States** — Every async action has loading → success → error flow
- **User-Friendly Errors** — Clean messages, never raw backend output
- **Responsive Design** — Works seamlessly across all devices
- **Professional UI** — Modern design with Tailwind CSS

---

## 🛠 Technologies Used

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express.js** | REST API framework and routing |
| **MongoDB** | NoSQL database for user storage |
| **Mongoose** | MongoDB object modeling and schema |
| **JSON Web Token (JWT)** | Secure token-based authentication |
| **Bcrypt.js** | Password hashing and comparison |
| **dotenv** | Environment variable management |

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React JS** | Component-based UI architecture |
| **React Router DOM** | Client-side routing and navigation |
| **Context API** | Global authentication state management |
| **Axios Instance** | HTTP requests with token attachment |
| **Tailwind CSS** | Utility-first responsive styling |
| **React Icons** | Icon library for UI elements |
| **Vite** | Fast development server and build tool |

---

## 📁 Folder Structure

```
📦 Project Root
│
├── 🗂 backend/
│   ├── config/
│   │   └── db.js                  # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js      # Register & Login logic
│   │   └── userController.js      # User data logic
│   ├── middleware/
│   │   ├── authMiddleware.js      # JWT verification
│   │   └── errorMiddleware.js     # Global error handler
│   ├── models/
│   │   └── User.js                # Mongoose user schema
│   ├── routes/
│   │   ├── authRoutes.js          # /api/auth endpoints
│   │   └── userRoutes.js          # /api/user endpoints
│   ├── utils/
│   │   └── generateToken.js       # JWT token generator
│   |    └── asyncHandler.js        # Handle asynchronously
│   ├── .env                       # Environment variables
│   └── server.js                  # App entry point
│
└── 🗂 frontend/
    └── src/
        ├── pages/
        │   ├── Auth.jsx           # Registration & Login page
        │   └── Dashboard.jsx      # Protected dashboard
        ├── components/
        │   └── ProtectedRoute.jsx # Route guard component
        ├── services/
        │   └── api.js             # Centralized API config
        ├── context/
        │   └── AuthContext.jsx    # Global auth state
        ├── App.jsx                # Root component + routes
        └── main.jsx               # React entry point
```

---

## 📡 API Reference

### Auth Endpoints

| Method | Endpoint | Description | Access |
|--------|---------|-------------|--------|
| `POST` | `/api/auth/register` | Register new user | Public |
| `POST` | `/api/auth/login` | Login and receive JWT | Public |
| `GET` | `/api/user/profile` | Get user profile | 🔒 Protected |

### Response Pattern
```json
✅ Success
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGci...",
    "user": { "id", "username", "email" }
  }
}

❌ Error
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

## 🎯 Learning Outcomes

### 🔐 Authentication & Security
- Build complete register, login, and logout flow with JWT
- Hash passwords with Bcrypt before saving to database
- Generate and verify JWT tokens securely
- Attach user to request object via auth middleware
- Never expose passwords in any API response

### 🏗 Backend Architecture
- Structure a professional MVC Node.js project from scratch
- Separate concerns across models, controllers, routes, and middleware
- Write consistent API responses with proper HTTP status codes
- Handle errors globally with dedicated error middleware
- Connect and configure MongoDB with Mongoose

### ⚛️ Frontend Development
- Manage global auth state with React Context API
- Centralize all API calls in a single `services/api.js` file
- Build protected routes that redirect unauthenticated users
- Handle loading, success, and error states on every async action
- Navigate programmatically using React Router's `useNavigate`

### 🧠 Real-World Patterns
- Apply clean scalable folder structure used in production apps
- Understand the contract between frontend and backend
- Build reusable middleware and utility functions
- Design UI with professional UX: loaders, errors, smooth redirects

---

## 📽 Watch the Tutorial
🎥 **YouTube:** [Link coming soon — subscribe to get notified]

## 🌐 Live Preview
🔗 **Netlify:** [https://cosmo-auth.vercel.app/auth](https://cosmo-auth.vercel.app/auth)

## 💰 Download Complete Source Code
🔗 **Patreon:** [Link coming soon ]( — subscribe to get notified)
---

## 👨‍💻 Author

**Frontend Mastery**
GitHub: [frontend-mastery12](https://github.com/frontend-mastery12)

---

> ⭐ If this project helped you, please consider giving it a star — it helps others find it too!

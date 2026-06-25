# ProblemPilot 🚀

ProblemPilot is a full-stack MERN application designed to help programmers track coding problems, organize notes, and monitor their learning progress efficiently.

## 🌐 Live Demo

**Frontend:** https://promblem-pilot-46vk.vercel.app

**Backend API:** https://promblempilot.onrender.com

**GitHub Repository:** https://github.com/ruthika-23/PromblemPilot

---

## 📌 Features

- User Authentication using JWT
- Secure Login and Registration
- Create, Update, and Delete Coding Problems
- Track Problem Status (Solved / Pending)
- Categorize Problems by Difficulty and Topic
- Personal Notes Management
- User Profile Management
- Progress Tracking Dashboard
- Responsive User Interface
- Cloud Deployment with Vercel and Render

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

### Database
- MongoDB Atlas

### Deployment
- Vercel
- Render

---

## 📂 Project Structure

```text
PromblemPilot/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/ruthika-23/PromblemPilot.git
cd PromblemPilot
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend application:

```bash
npm run dev
```

---

## 🚀 Deployment

### Frontend
Deployed on Vercel

### Backend
Deployed on Render

### Database
Hosted on MongoDB Atlas

---

## 👩‍💻 Author

**Ruthika**

GitHub: https://github.com/ruthika-23

---

If you found this project useful, consider giving it a ⭐ on GitHub.

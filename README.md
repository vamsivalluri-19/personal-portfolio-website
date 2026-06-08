# Personal Portfolio Website

A modern Full Stack Portfolio Website built using the MERN Stack. This portfolio showcases projects, skills, and contact information with a responsive and interactive user interface.

## 🚀 Live Demo

### Frontend (Vercel)

https://personal-portfolio-website-blue-theta.vercel.app

### Backend (Render)

https://personal-portfolio-website-fwol.onrender.com

---

## 📌 Features

* Modern Responsive UI
* About Me Section
* Skills Section
* Dynamic Projects Section
* Contact Form with Backend Integration
* MongoDB Database Integration
* REST API using Express.js
* Fully Responsive Design
* Deployed using Vercel and Render

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

### Deployment

* Vercel (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

## 📂 Project Structure

```text
personal-portfolio/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/vamsivalluri-19/personal-portfolio-website.git
```

```bash
cd personal-portfolio
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
FRONTEND_URL=http://localhost:5173
```

Start Backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start Frontend:

```bash
npm run dev
```

---

## API Endpoints

### Projects

```http
GET /api/projects
```

Returns all portfolio projects.

---

### Contact

```http
POST /api/contact
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

---

## 📸 Screenshots

### Home Page

* Hero Section
* About Section
* Skills Section
* Projects Section
* Contact Section

---

## 👨‍💻 Author

### Vamsi Valluri

* GitHub: https://github.com/vamsivalluri-19
* LinkedIn: https://www.linkedin.com/in/vamsivalluri
* Email: [vamsivalluri19@gmail.com](mailto:vamsivalluri19@gmail.com)

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub.

```bash
⭐ Star the repository
```

---

## 📄 License

This project is licensed under the MIT License.

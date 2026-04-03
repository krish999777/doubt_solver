# 🧠 Doubt Solver (Q&A Platform)

A full-stack Q&A web application where users can post questions, submit answers, and mark accepted answers — similar to a simplified Stack Overflow.

🔗 Live Demo: https://doubt-solver-pi.vercel.app

---

## 🚀 Features

- 📌 Create and view questions  
- 💬 Add answers to questions  
- ✅ Mark an answer as accepted  
- 📊 View answer count per question  
- ⚡ Dynamic UI updates without page reloads  
- 🌐 Fully deployed and accessible online  

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL (Neon)

### Deployment
- Frontend → Vercel  
- Backend → Render  
- Database → Neon  

---

## 🧩 API Endpoints

### Questions
- `GET /questions` → Get all questions  
- `GET /questions/:id` → Get question with answers  
- `POST /questions` → Create a question  

### Answers
- `POST /questions/:id/answers` → Add answer  
- `POST /answers/:id/accept` → Mark answer as accepted  

---

## ⚙️ Key Concepts Implemented

- REST API design  
- Relational database modelling (Questions ↔ Answers)  
- Foreign keys and joins  
- Error handling and validation  
- CORS configuration  
- Client-side routing (SPA fallback handling)  
- State management and re-fetching after mutations  
- Full-stack deployment  

---

## 📸 Screenshots

<img width="1470" height="802" alt="image" src="https://github.com/user-attachments/assets/69fb594f-fb3e-43c5-a056-b0a45af82344" />
<img width="1470" height="802" alt="image" src="https://github.com/user-attachments/assets/5178deb6-f63e-47d4-8a8c-447251974064" />
<img width="1470" height="803" alt="image" src="https://github.com/user-attachments/assets/3231cbf2-d796-439d-883d-fe3fae974af1" />


---

## 🧪 Running Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/doubt-solver.git
cd doubt-solver

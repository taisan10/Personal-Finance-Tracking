# 💰 Personal Finance Tracker (MERN)

A simple **Personal Finance Tracker** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to **Add, View, Edit, and Delete transactions** with fields like title, amount, date, and category.  

---

## 🚀 Features
- Full **CRUD** operations for transactions
- **React Router** for navigation
- **Tailwind CSS** for clean and responsive UI
- REST API built with **Node.js + Express**
- Data persistence with **MongoDB**
- Bonus: Easily extendable for filters, charts, and authentication

---

## 📂 Project Structure
backend/
├── models/
│ └── Transaction.js
├── routes/
│ └── transactionRoutes.js
├── server.js

frontend/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── TransactionForm.jsx
│ │ └── TransactionList.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── AddTransaction.jsx
│ │ ├── EditTransaction.jsx
│ │ └── DeleteTransaction.jsx
│ ├── App.jsx
│ └── index.js
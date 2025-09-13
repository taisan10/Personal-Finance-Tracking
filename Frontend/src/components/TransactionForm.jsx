import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function TransactionForm({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });

  // If edit mode → fetch transaction data
  useEffect(() => {
    if (mode === "edit" && id) {
      axios
        .get(`https://personal-finance-tracking-production.up.railway.app/api/transactions/${id}`)
        .then((res) => {
          const { title, amount, date, category } = res.data;
          setForm({
            title,
            amount,
            date: date.split("T")[0], // format for input[type=date]
            category,
          });
        })
        .catch((err) => console.error("Error fetching transaction:", err));
    }
  }, [mode, id]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "add") {
        await axios.post("https://personal-finance-tracking-production.up.railway.app/api/transactions/", form);
      } else {
        await axios.put(`https://personal-finance-tracking-production.up.railway.app/api/transactions/${id}`, form);
      }
      navigate("/"); // back to home
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Amount</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-yellow-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
      >
        {mode === "add" ? "Add Transaction" : "Update Transaction"}
      </button>
    </form>
  );
}

export default TransactionForm;

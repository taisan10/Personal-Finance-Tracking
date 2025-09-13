import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function DeleteTransaction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/transactions/${id}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.error("Error fetching transaction:", err));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/transactions/${id}`);
      navigate("/");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  if (!transaction) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <h1 className="text-2xl font-bold mb-4">Delete Transaction</h1>
      <p className="mb-6">
        Are you sure you want to delete <br />
        <span className="font-semibold text-red-600">
          {transaction.title} ({transaction.amount}₹)
        </span>
        ?
      </p>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteTransaction;

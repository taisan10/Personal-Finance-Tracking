import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  // Fetch all transactions
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await axios.get("https://personal-finance-tracking-production.up.railway.app/api/transactions/");
      setTransactions(res.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await axios.delete(`https://personal-finance-tracking-production.up.railway.app/api/transactions/${id}`);
        fetchTransactions(); // refresh list
      } catch (error) {
        console.error("Error deleting transaction:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Date</th>
            <th className="p-2">Category</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="text-center p-4 text-gray-500 italic"
              >
                No transactions found
              </td>
            </tr>
          ) : (
            transactions.map((tx) => (
              <tr
                key={tx._id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-2">{tx.title}</td>
                <td
                  className={`p-2 font-semibold ${
                    tx.amount > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.amount}
                </td>
                <td className="p-2">
                  {new Date(tx.date).toLocaleDateString()}
                </td>
                <td className="p-2">{tx.category}</td>
                <td className="p-2 space-x-2">
                  <Link
                    to={`/${tx._id}/edit`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(tx._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;

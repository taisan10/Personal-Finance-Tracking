import React from "react";
import TransactionForm from "../components/TransactionForm";

function AddTransaction() {
  return (
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Add Transaction</h1>
      <TransactionForm mode="add" />
    </div>
  );
}

export default AddTransaction;

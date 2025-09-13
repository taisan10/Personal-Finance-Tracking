import React from "react";
import TransactionList from "../components/TransactionList";

function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">All Transactions</h1>
      <TransactionList />
    </div>
  );
}

export default Home;

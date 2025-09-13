import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold">💰 Finance Tracker</h2>
      <div className="space-x-4">
        <Link
          to="/"
          className="hover:text-yellow-400 transition"
        >
          Home
        </Link>
        <Link
          to="/add"
          className="hover:text-yellow-400 transition"
        >
          Add Transaction
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

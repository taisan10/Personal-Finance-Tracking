import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTransaction from "./pages/Addtransaction";
import EditTransaction from "./pages/EditTransaction";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTransaction />} />
          <Route path="/:id/edit" element={<EditTransaction />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

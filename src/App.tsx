import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Dashboard from "./Dashboard";
import Order from "./order";
import OrderInfo from "./OrderInfo";   // ✅ Import OrderInfo

function App() {
  return (
    
      <Routes>
        {/* Default route goes to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* ✅ Order-related pages */}
        <Route path="/dashboard/procurement-order" element={<Order />} />
        <Route path="/dashboard/procurement-order/info" element={<OrderInfo />} /> {/* NEW PAGE */}
      </Routes>
    
  );
}

export default App;

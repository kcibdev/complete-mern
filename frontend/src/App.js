import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/auth/Login";
import LoginSuccess from "./pages/auth/LoginSuccess";
import Register from "./pages/auth/Register";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <ToastContainer newestOnTop={true} />
    </>
  );
}

export default App;

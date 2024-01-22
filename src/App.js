import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

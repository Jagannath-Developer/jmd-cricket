import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/login" element={<>login</>} />
      </Routes>
    </div>
  );
}

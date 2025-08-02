// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HospitalDetails from "./pages/HospitalDetails";
import AlertPage from "./pages/AlertPage";
import { HospitalProvider } from "./context/HospitalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <HospitalProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/hospital/:id" element={<HospitalDetails />} />
        <Route path="/alert" element={<AlertPage />} />
      </Routes>

      <Footer />

      {/* ✅ Global Toast Notifications */}
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </HospitalProvider>
  );
}

export default App;

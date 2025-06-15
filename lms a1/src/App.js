import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

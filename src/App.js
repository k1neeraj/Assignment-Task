import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployList from './components/EmployList';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="/employee-list" element={<EmployList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

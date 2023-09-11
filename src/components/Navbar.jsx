import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/employee-form" className="nav-link">
            Employee Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/employee-list" className="nav-link">
            Employee List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

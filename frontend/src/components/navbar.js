import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "lightgray", padding: "10px" }}>
      <ul className="navbar-list" style={{ display: "flex", listStyleType: "none", justifyContent: "space-between" }}>
        <li className="navbar-item">
        <span>Hi</span>
        
        </li>
        <li className="navbar-item">
        <span>Hi</span>
        
        </li>
        <li className="navbar-item">
         <span>Hi</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

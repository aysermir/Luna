import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "lightgray", padding: "10px" }}>
      <ul className="navbar-list" style={{ display: "flex", listStyleType: "none" }}>
        <li className="navbar-item">Home</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

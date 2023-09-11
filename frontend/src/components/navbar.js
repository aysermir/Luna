import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "lightgray", padding: "10px" }}>
      <ul className="navbar-list" style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
        <li className="navbar-item" style={{ marginRight: "10px" }}>Home</li>
        <li className="navbar-item" style={{ marginRight: "10px" }}>About</li>
        <li className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import palette from "./Palette";

const Navbar = () => {
  const { colors, fonts } = palette;

  return (
    <nav className="navbar" style={{ fontFamily: fonts.heading, backgroundColor: colors.primary, padding: "1px" }}>
      <ul className="navbar-list" style={{ fontFamily: fonts.nav,display: "flex", listStyleType: "none", justifyContent: "space-between" }}>
        <li className="navbar-item">
          <span>Home</span>
        </li>
        <li className="navbar-item">
        <span>Home</span>
        </li>
        <li className="navbar-item">
        <span>Home</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

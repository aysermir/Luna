import React from "react";
import Navbar from "./navbar";

const HomePage = () => {
    const handleProfileClick = (columnIndex) => {
        console.log(`Clicked profile button in column ${columnIndex}`);
        // Perform any desired action when the profile button is clicked
      };
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>Column 1</div>
            <div style={{ flex: 1 }}>Column 2</div>
            <div style={{ flex: 1 }}>Column 3</div>
        </div>
    </div>
  );
};

export default HomePage;

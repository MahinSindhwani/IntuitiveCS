// src/HamburgerMenu.jsx
import React, { useState } from "react";
import "./HamburgerMenu.css"; // We'll create this CSS file next
import ReactLogo from "./assets/react.svg"; // Assuming you want to use react.svg as the icon

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <img src={ReactLogo} alt="Menu" />
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isOpen ? "open" : ""}`} onClick={toggleMenu}></div>

      {/* Sliding Menu */}
      <div className={`sliding-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#option1">Option 1</a></li>
          <li><a href="#option2">Option 2</a></li>
          <li><a href="#option3">Option 3</a></li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;

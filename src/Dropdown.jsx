import React, { useState } from "react";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <h3>{title}</h3>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

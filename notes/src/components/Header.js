import React from "react";

const Header = ({ handleToggleDarkMode, darkMode }) => {
  return (
    <div className="header">
      <h1>React-Notes</h1>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => handleToggleDarkMode(previousDarkMode => !previousDarkMode)}
        />
        <span 
          className="slider round"></span>
      </label>
    </div>
  );
};

export default Header;

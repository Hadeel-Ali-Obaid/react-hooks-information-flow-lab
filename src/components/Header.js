import React from "react";

function Header({ onDarkModeClick, isDarkMode}) {
  function handleClick() {
    onDarkModeClick();
}

  return (
    <>
      <h2>Shopster</h2>
      <button onClick={handleClick}>
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </>
  );
}

export default Header;
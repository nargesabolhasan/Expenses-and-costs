import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-700 text-white p-2 rounded my-4 print:hidden"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggle;

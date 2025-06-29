import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const darkStyles =
    theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, darkStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

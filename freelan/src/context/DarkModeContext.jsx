import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (localStorage.getItem("isDarkMode") == "true") return true;
    else if (localStorage.getItem("isDarkMode") == "false") return false;

    if (document.documentElement.classList.value == "light") return true;
    else if (document.documentElement.classList.value == "dark") return false;
  });

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(
    function () {
      if (isDarkMode == true) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("isDarkMode", true);
      } else if (isDarkMode == false) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("isDarkMode", false);
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

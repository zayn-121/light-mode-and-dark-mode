import { useContext } from "react";
import ThemeSwitch from "../context/ThemeSwitch";

const ThemeSwitcher = () => {
    const {theme, toggleTheme}=useContext(ThemeSwitch)
  return (
    <div className= "theme-switcher">
      <button onClick={() => toggleTheme()} className={theme === "light" ? "theme-switcher-light" : "theme-switcher-dark" }>
        {theme === "light" ? "Light ☀️" : "Dark 🌙"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

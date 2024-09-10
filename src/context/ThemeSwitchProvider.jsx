import { useState } from "react"
import ThemeSwitch from "./ThemeSwitch"


const ThemeSwitchProvider = ({children}) => {
   const [theme, setTheme] = useState('light')

   const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
   }
    return(
        <ThemeSwitch.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeSwitch.Provider>
    )
}

export default ThemeSwitchProvider
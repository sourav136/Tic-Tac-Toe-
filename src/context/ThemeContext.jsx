import { Children, createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();

const getInitialTheme = () => {
    try{
        const savedTheme = localStorage.getItem("theme");
        return savedTheme==="light" ? "light" : "dark";
    } catch{
        return "light";
    }
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
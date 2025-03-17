import { createContext } from "react";



export default ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
    ThemeContextProvider
}
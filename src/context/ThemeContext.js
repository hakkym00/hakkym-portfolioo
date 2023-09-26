import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const [modal, setModal] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, modal, setModal }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

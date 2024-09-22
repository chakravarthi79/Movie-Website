import { createContext, useState } from "react";

export const theme = createContext();

const ThemeContext = ({ children }) => {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleItem = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <theme.Provider
      value={{
        isDarkModeEnabled,
        setIsDarkModeEnabled,
        toggleItem: toggleItem,
      }}
    >
      {children}
    </theme.Provider>
  );
};
export default ThemeContext;

import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initalState = {
    darkMode: true,
  };

  const [state, dispatch] = useReducer(ThemeReducer, initalState);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

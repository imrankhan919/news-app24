import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const initalState = {
    allNews: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, initalState);

  return (
    <NewsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;

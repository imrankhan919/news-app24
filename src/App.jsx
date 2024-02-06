import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeButton from "./components/ThemeButton";
import { NewsProvider } from "./context/news/NewsContext";
import { WeatherProvider } from "./context/weather/WeatherContext";

const App = () => {
  return (
    <NewsProvider>
      <Navbar />
      <WeatherProvider>
        <Home />
      </WeatherProvider>
      <ThemeButton />
    </NewsProvider>
  );
};

export default App;

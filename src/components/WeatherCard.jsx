import React, { useContext, useEffect } from "react";
import ThemeContext from "../context/theme/ThemeContext";
import WeatherContext from "../context/weather/WeatherContext";
import { getWeather } from "../context/weather/WeatherActions";

const WeatherCard = () => {
  const { darkMode } = useContext(ThemeContext);

  const { weatherData, dispatch } = useContext(WeatherContext);

  const fetchWeather = async (city) => {
    const data = await getWeather(city);
    dispatch({
      type: "GET_WEATHER",
      payload: data,
    });
  };

  useEffect(() => {
    fetchWeather("Indore");
  }, []);

  if (!weatherData || weatherData.length === 0) {
    <h1 className="text-center">Loading...</h1>;
  }

  return (
    <div className="col-md-4 col-sm-12">
      <div className={darkMode ? "card p-5 bg-dark text-light" : "card p-5"}>
        <h4 className="text-secondary">Today's Weather</h4>
        <span className="d-flex align-items-center justify-content-between">
          <span>
            <h1>{weatherData?.current.temp_c}</h1>
            <h2>{weatherData?.location.name}</h2>
          </span>
          <span>
            <img src={weatherData?.current.condition.icon} alt="" />
            <p>{weatherData?.current.condition.text}</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;

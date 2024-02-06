export const getWeather = async (city) => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=e4f81313b50d4b6da7e62715240202 &q=${city}&aqi=yes`
  );
  const data = await response.json();
  return data;
};

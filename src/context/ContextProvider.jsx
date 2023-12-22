import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const convertCityName = async (cityName) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${'london'}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setLatitude(data[0].lat);
      setLongitude(data[0].lon);
    } catch (error) {
      console.log(error);
    }
  };

  const searchWeather = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <MyContext.Provider
      value={{
        searchWeather,
        convertCityName,
        weatherData,
        loading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

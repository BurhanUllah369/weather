import React from "react";
import TodayTimeWeather from "../components/TodayTimeWeather";

function TodayForecast() {
  return (
    <div className="today">
      <p className="today-heading gray">TODAY'S FORECAST</p>
      <div className="today-forecast-container">
        <TodayTimeWeather />
        <TodayTimeWeather />
        <TodayTimeWeather />
        <TodayTimeWeather />
      </div>
    </div>
  );
}

export default TodayForecast;

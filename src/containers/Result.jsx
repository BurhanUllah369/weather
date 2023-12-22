import React, {useContext, useState} from "react";
import City from "../components/City";
import AirCondition from "./AirCondition";
import TodayForecast from "./TodayForecast";
import WeekForecast from "./WeekForecast";
import { MyContext } from "../context/ContextProvider";

function Result() {
  const {weatherData} = useContext(MyContext)
  return (
    <div className="result">
      {console.log(weatherData)}
      <div className="today-forecast-result">
        <City />
        <TodayForecast />
        <AirCondition />
      </div>
      <div className="week-forecast-result">
        <WeekForecast />
      </div>
    </div>
  );
}

export default Result;

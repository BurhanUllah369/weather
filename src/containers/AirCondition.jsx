import React from "react";
import AirConditionElement from "../components/AirConditionElement";

export default function AirCondition() {
  return (
    <div className="air-condition">
      <p className="gray air-condition-heading">AIR CONDITIONS</p>
      <div className="air-condition-elements">
        <AirConditionElement
          icon={"fa-solid fa-temperature-three-quarters"}
          heading="Real Feel"
          num={"30°"}
        />
        <AirConditionElement
          icon={"fa-solid fa-wind"}
          num={"0.2 km/h"}
          heading={"Wind"}
        />
        <AirConditionElement
          icon={"fa-solid fa-cloud-rain"}
          num={"0%"}
          heading={"Chances of rain"}
        />
        <AirConditionElement
          icon={"fa-solid fa-water"}
          num={"60"}
          heading={"Humidity"}
        />
      </div>
    </div>
  );
}

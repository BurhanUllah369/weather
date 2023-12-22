import React, { useContext, useState } from "react";
import { MyContext } from "../context/ContextProvider";

function Search() {
  const [cityName, setCityName] = useState("");
  const { convertCityName, searchWeather } = useContext(MyContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    convertCityName(cityName);
    searchWeather();
  };

  return (
    <form action="" onSubmit={handleOnSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search for cities"
        onChange={(e) => setCityName(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;

import React, { useState } from "react";
import axios from "axios";

const SearchLocation = ({ setData }) => {
  //State
  const [location, setLocation] = useState("");

  //Variables
  const apiKey = "c77a70b319946db83eda527a465749d5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const search = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={search}
        placeholder="Enter Location"
      />
    </div>
  );
};

export default SearchLocation;

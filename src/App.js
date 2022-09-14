import React, { useState } from "react";
import BottomSection from "./components/bottomSection";
import SearchLocation from "./components/searchLocation";
import TopSection from "./components/topSection";

function App() {
  //States
  const [data, setData] = useState({});

  return (
    <div className="App">
      <SearchLocation setData={setData} />
      <div className="container">
        <TopSection data={data} />
        {data.name != undefined && <BottomSection data={data} />}
      </div>
    </div>
  );
}

export default App;

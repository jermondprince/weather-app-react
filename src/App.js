import React, { useState } from "react";
import BottomSection from "./bottomSection";
import SearchLocation from "./searchLocation";
import TopSection from "./topSection";

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

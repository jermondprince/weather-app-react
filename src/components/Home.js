import React from "react";
import BottomSection from "./bottomSection";
import SearchLocation from "./searchLocation";
import TopSection from "./topSection";

const Home = ({ data, setData }) => {
  return (
    <div>
      <SearchLocation setData={setData} />
      <div className="container">
        <TopSection data={data} />
        {data.name != undefined && <BottomSection data={data} />}
      </div>
    </div>
  );
};

export default Home;

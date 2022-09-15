import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/nav";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

function App() {
  //States
  const [data, setData] = useState({});

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home data={data} setData={setData} />}
        />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

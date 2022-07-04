import React, { useState } from "react";
import "./App.css";
import DriverDetail from "./pages/DriverDetail";

import Login from "./pages/Login";
import Maps from "./pages/Maps";
// import Button from "./components/Buttons/Button";

function App() {
 

  return (
    <div className="App">
      {/* <Login/> */}
      {/* <DriverDetail/> */}
      <Maps/>
      </div>
    // <Routes>
    //   {/* <Route path="/" element={<Home/>} /> */}
    //   <Route path="/" element={<Login />} />
    //   {/* <Route path="today" element={<TodaysSchedule />} /> */}
    // </Routes>
  
  );
}

export default App;

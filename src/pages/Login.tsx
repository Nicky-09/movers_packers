import React, { useState } from "react";
import Icons from '../components/Icons';

import "./Login.scss";
import driver from "../assets/driver.png";

import Button from "@mui/material/Button";
// import Login from "../pages/Login";

function Login() {

    const [login, setLogin] = useState(false);

    const handleClick = () => {
      setLogin(true);
      console.log("clicked");
    };
  return (

    <div className="App">
   
      <div>
        <div className="pods-logo">
          <Icons />
        </div>
        <h1 className="app-title">Real Time - ETA Communicator</h1>
        <Button variant="outlined" onClick={handleClick}>
          Go
        </Button>

        <div className="driver-container">
          <img src={driver} alt="driver-img" />
        </div>
      </div>
   


  </div>

   
  )
}

export default Login
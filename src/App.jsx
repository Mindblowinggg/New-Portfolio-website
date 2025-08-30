import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css"

const App = () => {
  return (
    <div className="appcontainer">
      {/* <Navbar /> */}
      <Home/>
      <Home/>
      <Home/>
    </div>
  );
};

export default App;



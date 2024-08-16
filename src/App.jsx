import React from "react";
import Home from "./pages/Home/Home";
import Signup from "./components/Signup/Signup";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Main" element={<Home />} /> 
      </Routes>
      {/* <Home /> */}
    </>
  );
};

export default App;
